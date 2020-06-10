"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
const Internals = require("../internals");
/**
 * Transaction entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(32, 32),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Entity.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    Class.Public()
], Entity.prototype, "currency", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "creationDate", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.Status)),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.State)),
    Class.Public()
], Entity.prototype, "detailedStatus", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Entities.Order.Details),
    Class.Public()
], Entity.prototype, "orderDetails", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Entities.Customer),
    Class.Public()
], Entity.prototype, "customer", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "errorCode", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "errorMessage", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "detailedErrorCode", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "detailedErrorMessage", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Authentication.Strong)),
    Class.Public()
], Entity.prototype, "effectiveStrongAuthentication", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.Mode)),
    Class.Public()
], Entity.prototype, "operationType", void 0);
__decorate([
    RestDB.Schema.String(32, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "paymentMethodToken", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Method)),
    Class.Public()
], Entity.prototype, "paymentMethodType", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(8, 8),
    Class.Public()
], Entity.prototype, "shopId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Entities.Transaction.Details),
    Class.Public()
], Entity.prototype, "transactionDetails", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('transaction'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map