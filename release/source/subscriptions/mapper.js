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
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Subscription mapper class.
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
     * Get the last request payload.
     */
    get payload() {
        return this.lastPayload;
    }
    /**
     * Create a new subscription request.
     * @param request Subscription creation request.
     * @returns Returns a promise to get the subscription Id.
     * @throws Throws an error when the server response is invalid.
     */
    async create(request) {
        this.lastPayload = void 0;
        const answer = (await this.mapper.insertEx(Requests.Create, request));
        return answer.subscriptionId;
    }
    /**
     * Load the subscription that corresponds to the specified request.
     * @param request Subscription load request.
     * @returns Returns a promise to get the subscription entity or undefined when the subscription was not found.
     */
    async load(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Get, request);
        if (answer !== void 0) {
            this.lastPayload = RestDB.Outputer.createFull(entity_1.Entity, answer, []);
            return this.lastPayload;
        }
        return void 0;
    }
    /**
     * Update the subscription that corresponds to the specified request.
     * @param request Subscription update request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async modify(request) {
        this.lastPayload = void 0;
        const answer = await this.mapper.insertEx(Requests.Update, request);
        if (answer !== void 0) {
            return answer.responseCode === 0;
        }
        return false;
    }
    /**
     * Cancel the subscription that corresponds to the specified request.
     * @param request Subscription cancel request.
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
    Class.Public()
], Mapper.prototype, "payload", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modify", null);
__decorate([
    Class.Public()
], Mapper.prototype, "cancel", null);
Mapper = __decorate([
    Injection.Inject(client_1.Client),
    Injection.Describe({ singleton: true, name: 'subscription' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map