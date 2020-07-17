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
const Types = require("./types");
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Transaction mapper class.
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
        if (validate && payload !== void 0 && payload.detailedStatus === Types.DetailedStatus.Error) {
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
     * Load the transaction that corresponds to the specified request.
     * @param request Transaction load request.
     * @returns Returns a promise to get the transaction entity or undefined when the transaction was not found.
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
     * Update the transaction that corresponds to the specified request.
     * @param request Transaction update request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async modify(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Update, request);
        if (answer !== void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            this.updatePayload(entity);
            return true;
        }
        return false;
    }
    /**
     * Capture all transactions that corresponds to the specified request.
     * @param request Transaction capture request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async capture(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Capture, request);
        if (answer !== void 0) {
            return answer.responseCode === 0;
        }
        return false;
    }
    /**
     * Validate the transaction that corresponds to the specified request.
     * @param request Transaction validate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    async validate(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Validate, request);
        if (answer !== void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            this.updatePayload(entity);
            return true;
        }
        return false;
    }
    /**
     * Cancel the transaction that corresponds to the specified request.
     * @param request Transaction cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    async cancel(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Rollback, {
            ...request,
            resolutionMode: Types.Resolution.CancellationOnly
        });
        if (answer !== void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            this.updatePayload(entity, true);
            return true;
        }
        return false;
    }
    /**
     * Refund the transaction that corresponds to the specified request.
     * @param request Transaction refund request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    async refund(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Rollback, {
            ...request,
            resolutionMode: Types.Resolution.RefundOnly
        });
        if (answer !== void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            this.updatePayload(entity, true);
            return true;
        }
        return false;
    }
    /**
     * Cancel or Refund the transaction that corresponds to the specified request.
     * @param request Transaction rollback request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    async rollback(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Rollback, request);
        if (answer !== void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            this.updatePayload(entity, true);
            return true;
        }
        return false;
    }
    /**
     * Duplicate the transaction that corresponds to the specified request.
     * @param request Transaction duplicate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async duplicate(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Duplicate, request);
        if (answer !== void 0) {
            const entity = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            this.updatePayload(entity, true);
            return true;
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
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modify", null);
__decorate([
    Class.Public()
], Mapper.prototype, "capture", null);
__decorate([
    Class.Public()
], Mapper.prototype, "validate", null);
__decorate([
    Class.Public()
], Mapper.prototype, "cancel", null);
__decorate([
    Class.Public()
], Mapper.prototype, "refund", null);
__decorate([
    Class.Public()
], Mapper.prototype, "rollback", null);
__decorate([
    Class.Public()
], Mapper.prototype, "duplicate", null);
Mapper = __decorate([
    Injection.Inject(client_1.Client),
    Injection.Describe({ singleton: true, name: 'transaction' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map