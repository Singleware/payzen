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
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Transaction mapper class.
 */
let Mapper = class Mapper extends RestDB.Mapper {
    /**
     * Default constructor.
     * @param dependencies Mapper dependencies.
     */
    constructor(dependencies) {
        super(dependencies.client, entity_1.Entity);
        this.client = dependencies.client;
    }
    /**
     * Load the transaction that corresponds to the specified request.
     * @param request Transaction load request.
     * @returns Returns a promise to get the transaction entity or undefined when the transaction was not found.
     */
    async load(request) {
        if ((await super.insertEx(Requests.Get, request)) !== void 0) {
            return RestDB.Outputer.createFull(entity_1.Entity, this.client.payload.answer, []);
        }
    }
    /**
     * Update the transaction that corresponds to the specified request.
     * @param request Transaction update request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async modify(request) {
        return (await super.insertEx(Requests.Update, request)) !== void 0;
    }
    /**
     * Capture all transactions that corresponds to the specified request.
     * @param request Transaction capture request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async capture(request) {
        return (await super.insertEx(Requests.Capture, request)) !== void 0;
    }
    /**
     * Duplicate the transaction that corresponds to the specified request.
     * @param request Transaction duplicate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async duplicate(request) {
        return (await super.insertEx(Requests.Duplicate, request)) !== void 0;
    }
    /**
     * Validate the transaction that corresponds to the specified request.
     * @param request Transaction validate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async validate(request) {
        return (await super.insertEx(Requests.Validate, request)) !== void 0;
    }
    /**
     * Cancel the transaction that corresponds to the specified request.
     * @param request Transaction cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async cancel(request) {
        return (await super.insertEx(Requests.Rollback, { ...request, resolutionMode: Types.Payment.Resolution.CancellationOnly })) !== void 0;
    }
    /**
     * Refund the transaction that corresponds to the specified request.
     * @param request Transaction refund request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async refund(request) {
        return (await super.insertEx(Requests.Rollback, { ...request, resolutionMode: Types.Payment.Resolution.RefundOnly })) !== void 0;
    }
    /**
     * Cancel or Refund the transaction that corresponds to the specified request.
     * @param request Transaction rollback request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async rollback(request) {
        return (await super.insertEx(Requests.Rollback, request)) !== void 0;
    }
};
__decorate([
    Class.Private()
], Mapper.prototype, "client", void 0);
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
], Mapper.prototype, "duplicate", null);
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
Mapper = __decorate([
    Injection.Inject(client_1.Client),
    Injection.Describe({ singleton: true, name: 'transaction' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map