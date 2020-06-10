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
const Answers = require("../answers");
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Payment mapper class.
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
     * Creates a new payment request.
     * @param request Payment creation request.
     * @returns Returns a promise to get the payment Id or undefined when the operation has been failed.
     */
    async create(request) {
        const id = await super.insertEx(Requests.Create, request);
        const answer = RestDB.Outputer.createFull(Answers.Payment, this.client.payload.answer, []);
        if (answer.orderStatus === Answers.Types.Order.Status.Unpaid) {
            const transaction = answer.transactions[0];
            if (transaction.detailedErrorMessage) {
                throw new Error(`${transaction.detailedErrorMessage} (code: ${transaction.detailedErrorCode})`);
            }
            else if (transaction.errorMessage) {
                throw new Error(`${transaction.errorMessage} (code: ${transaction.errorCode})`);
            }
            else {
                throw new Error(`Unknown error.`);
            }
        }
        return id;
    }
};
__decorate([
    Class.Private()
], Mapper.prototype, "client", void 0);
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