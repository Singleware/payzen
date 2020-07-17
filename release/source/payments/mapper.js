"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Transactions = require("../transactions");
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Payment mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Update the current payload by a new one.
     * @param payload New payload transaction.
     * @param validate Determines whether or not the payload must be validated.
     * @returns Returns the new payload.
     * @throws Throws an error when the given payload is invalid.
     */
    updatePayload(payload, validate) {
        this.lastPayload = payload;
        if (validate && payload !== void 0 && payload.detailedStatus === Transactions.Types.DetailedStatus.Error) {
            if (payload.detailedErrorMessage) {
                throw new Error(`${payload.detailedErrorMessage} (code: ${payload.detailedErrorCode})`);
            }
            else if (payload.errorMessage) {
                throw new Error(`${payload.errorMessage} (code: ${payload.errorCode})`);
            }
            else {
                throw new Error(`Unexpected transaction error.`);
            }
        }
        return payload;
    }
    /**
     * Get the last request payload.
     */
    get payload() {
        return this.lastPayload;
    }
    /**
     * Create a new payment request.
     * @param request Payment creation request.
     * @returns Returns a promise to get the payment Id or the payment form token.
     * @throws Throws an error when the server response is invalid.
     */
    async create(request) {
        var _a;
        this.lastPayload = void 0;
        const answer = (await this.mapper.insertEx(Requests.Create, request));
        if (answer.formToken === void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            return (_a = this.updatePayload(entity.transactions[0], true)) === null || _a === void 0 ? void 0 : _a.uuid;
        }
        return answer.formToken;
    }
};
__decorate([
    Class.Private()
], Mapper.prototype, "lastPayload", void 0);
__decorate([
    Injection.Inject(() => client_1.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "updatePayload", null);
__decorate([
    Class.Public()
], Mapper.prototype, "payload", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
Mapper = __decorate([
    Injection.Inject(client_1.Client),
    Injection.Describe({ singleton: true, name: 'payment' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map