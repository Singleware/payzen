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
const RestDB = require("@singleware/restdb");
const Types = require("../../../types");
const Order = require("../order");
const customer_1 = require("../customer");
/**
 * Order transaction, entity class.
 */
let Transaction = class Transaction extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(32, 32),
    Class.Public()
], Transaction.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Transaction.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    Class.Public()
], Transaction.prototype, "currency", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Transaction.prototype, "creationDate", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.Status)),
    Class.Public()
], Transaction.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.State)),
    Class.Public()
], Transaction.prototype, "detailedStatus", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Order.Details),
    Class.Public()
], Transaction.prototype, "orderDetails", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(customer_1.Customer),
    Class.Public()
], Transaction.prototype, "customer", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Transaction.prototype, "errorCode", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Transaction.prototype, "errorMessage", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Transaction.prototype, "detailedErrorCode", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Transaction.prototype, "detailedErrorMessage", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Authentication.Strong)),
    Class.Public()
], Transaction.prototype, "effectiveStrongAuthentication", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.Mode)),
    Class.Public()
], Transaction.prototype, "operationType", void 0);
__decorate([
    RestDB.Schema.String(32, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Transaction.prototype, "paymentMethodToken", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Method)),
    Class.Public()
], Transaction.prototype, "paymentMethodType", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(8, 8),
    Class.Public()
], Transaction.prototype, "shopId", void 0);
Transaction = __decorate([
    RestDB.Schema.Entity('Order/Transaction'),
    Class.Describe()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map