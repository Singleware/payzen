"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Subscription parser class.
 */
let Subscription = class Subscription extends Class.Null {
    /**
     * Gets the subscription response Id.
     * @param answer Answer entity.
     * @returns Returns the subscription response Id or undefined when the operation was failed.
     */
    static getResponseId(answer) {
        if (answer.subscriptionId === void 0) {
            throw new Error(`Unsupported subscription response.`);
        }
        return answer.subscriptionId;
    }
    /**
     * Gets the subscription response code.
     * @param answer Answer entity.
     * @returns Returns the string 'ok' when the response code indicates success, undefined otherwise.
     */
    static getResponseCode(answer) {
        if (answer.responseCode === void 0) {
            throw new Error(`Unsupported subscription response.`);
        }
        else if (answer.responseCode === 0) {
            return 'ok';
        }
        return void 0;
    }
};
__decorate([
    Class.Public()
], Subscription, "getResponseId", null);
__decorate([
    Class.Public()
], Subscription, "getResponseCode", null);
Subscription = __decorate([
    Class.Describe()
], Subscription);
exports.Subscription = Subscription;
//# sourceMappingURL=subscription.js.map