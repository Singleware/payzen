"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Token mapper class.
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
     * Load the token that corresponds to the specified request.
     * @param request Token load request.
     * @returns Returns a promise to get the token entity or undefined when the token was not found.
     */
    async load(request) {
        if ((await super.insertEx(Requests.Get, request)) !== void 0) {
            return RestDB.Outputer.createFull(entity_1.Entity, this.client.payload.answer, []);
        }
    }
    /**
     * Creates a new token request.
     * @param request Token creation request.
     * @returns Returns a promise to get the token Id or undefined when the operation has been failed.
     */
    async create(request) {
        return await super.insertEx(Requests.Create, request);
    }
    /**
     * Creates a new token from a transaction request.
     * @param request Token transaction request.
     * @returns Returns a promise to get the token Id or undefined when the operation has been failed.
     */
    async from(request) {
        return await super.insertEx(Requests.Transaction, request);
    }
    /**
     * Cancel the token that corresponds to the specified request.
     * @param request Token cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async cancel(request) {
        return (await super.insertEx(Requests.Cancel, request)) !== void 0;
    }
    /**
     * reactivate the token that corresponds to the specified request.
     * @param request Token reactivate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    async reactivate(request) {
        return (await super.insertEx(Requests.Reactivate, request)) !== void 0;
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
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "from", null);
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