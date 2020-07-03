"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const TestRequests = require("./tests/requests");
const TokenRequests = require("./tokens/requests");
const PaymentRequests = require("./payments/requests");
const TransactionRequests = require("./transactions/requests");
const SubscriptionRequests = require("./subscriptions/requests");
const OrderRequests = require("./orders/requests");
const Internals = require("./internals");
/**
 * Client driver class.
 */
let Client = class Client extends RestDB.Driver {
    /**
     * Default constructor:
     */
    constructor() {
        super();
        this.connect('https://api.payzen.com.br/api-payment/V4');
    }
    /**
     * Gets the request query string based on the specified entity model, fields and query filter.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Viewed fields.
     * @returns Returns the parsed query string.
     * @throws Throws an error when used with filters or viewed fields. (Feature not supported)
     */
    getRequestQuery(model, query, fields) {
        if (query || (fields && fields.length > 0)) {
            throw new Error(`Query filter and Viewed field doesn't supported.`);
        }
        return '';
    }
    /**
     * Gets the result Id from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the result Id or undefined when the result Id was not found.
     * @throws Throws an error when the response body doesn't contains the insert results.
     */
    getInsertResponse(model, response) {
        this.payloadData = void 0;
        if (response.status.code !== 200) {
            throw new Error(`Unexpected response status: ${response.status.code}`);
        }
        else if (!((this.payloadData = response.payload) instanceof Object)) {
            throw new Error(`Response body must have an object.`);
        }
        else {
            if (this.payloadData.status !== 'SUCCESS') {
                const answer = this.payloadData.answer;
                if (answer.detailedErrorMessage !== void 0) {
                    throw new Error(`${answer.detailedErrorCode}: ${answer.detailedErrorMessage}`);
                }
                else if (answer.errorMessage !== void 0) {
                    throw new Error(`${answer.errorCode}: ${answer.errorMessage}`);
                }
                else {
                    throw new Error(`Unknown error.`);
                }
            }
            else {
                switch (model) {
                    case PaymentRequests.Create:
                        return Internals.Parsers.Payment.getResponseId(this.payloadData.answer);
                    case SubscriptionRequests.Get:
                    case SubscriptionRequests.Create:
                        return Internals.Parsers.Subscription.getResponseId(this.payloadData.answer);
                    case TransactionRequests.Get:
                    case TransactionRequests.Cancel:
                    case TransactionRequests.Refund:
                    case TransactionRequests.Rollback:
                    case TransactionRequests.Validate:
                    case TransactionRequests.Update:
                    case TransactionRequests.Duplicate:
                        return Internals.Parsers.Transaction.getResponseId(this.payloadData.answer);
                    case OrderRequests.Get:
                        return Internals.Parsers.Order.getResponseId(this.payloadData.answer);
                    case TokenRequests.Get:
                    case TokenRequests.Create:
                    case TokenRequests.Transaction:
                        return Internals.Parsers.Token.getResponseId(this.payloadData.answer);
                    case TestRequests.Create:
                        return Internals.Parsers.Test.getResponseValue(this.payloadData.answer);
                    case SubscriptionRequests.Update:
                    case SubscriptionRequests.Cancel:
                    case TransactionRequests.Capture:
                    case TokenRequests.Cancel:
                    case TokenRequests.Reactivate:
                        return Internals.Parsers.Common.getResponseCode(this.payloadData.answer);
                    default:
                        throw new Error(`Unsupported request entity.`);
                }
            }
        }
    }
    /**
     * Notify an error in the given response entity for all listeners.
     * @param model Entity model.
     * @param response Response entity.
     */
    async notifyErrorResponse(model, response) {
        this.payloadData = response.payload instanceof Object ? response.payload : void 0;
        await super.notifyErrorResponse(model, response);
    }
    /**
     * Gets the payload from the last request.
     */
    get payload() {
        return this.payloadData;
    }
    /**
     * Sets the username and password authorization for all subsequent requests.
     * @param username Username.
     * @param password Password.
     * @returns Returns the client instance.
     */
    setAuthorization(username, password) {
        return this.setHeader('Authorization', `Basic ${RestDB.Coder.toBase64(`${username}:${password}`)}`), this;
    }
};
__decorate([
    Class.Private()
], Client.prototype, "payloadData", void 0);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestQuery", null);
__decorate([
    Class.Protected()
], Client.prototype, "getInsertResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "notifyErrorResponse", null);
__decorate([
    Class.Public()
], Client.prototype, "payload", null);
__decorate([
    Class.Public()
], Client.prototype, "setAuthorization", null);
Client = __decorate([
    Injection.Describe({ singleton: true, name: 'client' }),
    Class.Describe()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map