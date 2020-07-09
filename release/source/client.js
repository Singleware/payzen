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
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
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
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insert result.
     * @throws Throws an error when the server response is invalid.
     */
    getInsertResponse(model, response) {
        this.lastPayload = response.payload;
        if (response.status.code !== 200) {
            throw new Error(`Unexpected insert(${response.input.method}) response status: ${response.status.code}`);
        }
        else if (!(this.lastPayload instanceof Object) || this.lastPayload.answer === void 0) {
            throw new Error(`Response payload must have the answer property.`);
        }
        else {
            const answer = this.lastPayload.answer;
            if (this.lastPayload.status !== 'SUCCESS') {
                if (answer.detailedErrorMessage) {
                    throw new Error(`${answer.detailedErrorMessage} (code: ${answer.detailedErrorCode})`);
                }
                else if (answer.errorMessage) {
                    throw new Error(`${answer.errorMessage} (code: ${answer.errorCode})`);
                }
                else {
                    throw new Error(`Unexpected server error.`);
                }
            }
            return answer;
        }
    }
    /**
     * Get the request query string based on the specified entity model, filters and fields.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Fields to select.
     * @returns Returns the request query string.
     * @throws Throws an error when used with filters or selected fields. (Feature doesn't supported)
     */
    getRequestQuery(model, query, fields) {
        if (query || (fields && fields.length > 0)) {
            throw new Error(`Query filter and Viewed field doesn't supported.`);
        }
        return '';
    }
    /**
     * Get the last request payload.
     */
    get payload() {
        return this.lastPayload;
    }
    /**
     * Set the username and password authorization for all subsequent requests.
     * @param username Username.
     * @param password Password.
     * @returns Returns the instance itself.
     */
    setAuthorization(username, password) {
        this.setAuthHeader('Authorization', `Basic ${RestDB.Coder.toBase64(`${username}:${password}`)}`);
        return this;
    }
};
__decorate([
    Class.Private()
], Client.prototype, "lastPayload", void 0);
__decorate([
    Class.Protected()
], Client.prototype, "getInsertResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestQuery", null);
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