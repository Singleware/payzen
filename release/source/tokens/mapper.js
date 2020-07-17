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
const Payments = require("../payments");
const Transactions = require("../transactions");
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Token mapper class.
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
     * @param payload New payload payment.
     * @param validate Determines whether or not the payload must be validated.
     * @returns Returns the new payload.
     * @throws Throws an error when the given payload is invalid.
     */
    updatePayload(payload, validate) {
        this.lastPayload = payload;
        if (validate && payload instanceof Transactions.Entity && payload.detailedStatus === Transactions.Types.DetailedStatus.Error) {
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
     * Create a new token request.
     * @param request Token creation request.
     * @returns Returns a promise to get the token Id.
     * @throws Throws an error when the server response is invalid.
     */
    async create(request) {
        var _a;
        this.lastPayload = void 0;
        const answer = (await this.mapper.insertEx(Requests.Create, request));
        if (answer.formToken === void 0) {
            const entity = RestDB.Outputer.createFull(Payments.Entity, answer, []);
            return (_a = this.updatePayload(entity.transactions[0], true)) === null || _a === void 0 ? void 0 : _a.paymentMethodToken;
        }
        return answer.formToken;
    }
    /**
     * Create a new token from a transaction request.
     * @param request Token transaction request.
     * @returns Returns a promise to get the token Id.
     * @throws Throws an error when the server response is invalid.
     */
    async from(request) {
        var _a;
        this.lastPayload = void 0;
        const answer = (await this.mapper.insertEx(Requests.Transaction, request));
        const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
        return (_a = this.updatePayload(entity, true)) === null || _a === void 0 ? void 0 : _a.paymentMethodToken;
    }
    /**
     * Load the token that corresponds to the specified request.
     * @param request Token load request.
     * @returns Returns a promise to get the token entity or undefined when the token was not found.
     */
    async load(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Get, request);
        if (answer !== void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            return this.updatePayload(entity);
        }
        return void 0;
    }
    /**
     * Cancel the token that corresponds to the specified request.
     * @param request Token cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async cancel(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Cancel, request);
        if (answer !== void 0) {
            return answer.responseCode === 0;
        }
        return false;
    }
    /**
     * Reactivate the token that corresponds to the specified request.
     * @param request Token reactivate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async reactivate(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Reactivate, request);
        if (answer !== void 0) {
            return answer.responseCode === 0;
        }
        return false;
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
__decorate([
    Class.Public()
], Mapper.prototype, "from", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "cancel", null);
__decorate([
    Class.Public()
], Mapper.prototype, "reactivate", null);
Mapper = __decorate([
    Injection.Inject(client_1.Client),
    Injection.Describe({ singleton: true, name: 'token' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map