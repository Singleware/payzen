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
/**
 * Payment parser class.
 */
let Payment = class Payment extends Class.Null {
    /**
     * Gets the payment response Id.
     * @param answer Answer entity.
     * @returns Returns the payment response Id or undefined when the operation was failed.
     */
    static getResponseId(answer) {
        if (answer.formToken !== void 0) {
            return answer.formToken;
        }
        else if (answer.transactions instanceof Array) {
            const transaction = answer.transactions[0];
            if (transaction === void 0 || transaction.uuid === void 0) {
                throw new Error(`Missing transaction entity.`);
            }
            return transaction.uuid;
        }
        else {
            throw new Error(`Unsupported payment response.`);
        }
    }
};
__decorate([
    Class.Public()
], Payment, "getResponseId", null);
Payment = __decorate([
    Class.Describe()
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map