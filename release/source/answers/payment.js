"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("./types");
const Internals = require("./internals");
/**
 * Payment answer entity class.
 */
let Payment = class Payment extends Class.Null {
};
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(8, 8),
    Class.Public()
], Payment.prototype, "shopId", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Date(),
    Class.Public()
], Payment.prototype, "serverDate", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Enumeration(Object.values(Types.Order.Status)),
    Class.Public()
], Payment.prototype, "orderStatus", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Enumeration(Object.values(Types.Order.Cycle)),
    Class.Public()
], Payment.prototype, "orderCycle", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Order),
    Class.Public()
], Payment.prototype, "orderDetails", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Customer),
    Class.Public()
], Payment.prototype, "customer", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Transaction),
    Class.Public()
], Payment.prototype, "transactions", void 0);
Payment = __decorate([
    RestDB.Schema.Entity('payment'),
    Class.Describe()
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map