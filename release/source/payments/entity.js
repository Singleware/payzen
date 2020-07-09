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
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Transactions = require("../transactions");
const Order = require("../orders");
const Internals = require("./internals");
/**
 * Payment entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(8, 8),
    Class.Public()
], Entity.prototype, "shopId", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "serverDate", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Enumeration(() => Object.values(Order.Types.Status)),
    Class.Public()
], Entity.prototype, "orderStatus", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Enumeration(() => Object.values(Order.Types.Cycle)),
    Class.Public()
], Entity.prototype, "orderCycle", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Order.Internals.Details),
    Class.Public()
], Entity.prototype, "orderDetails", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Customer),
    Class.Public()
], Entity.prototype, "customer", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(() => Transactions.Entity, Internals.LightTransactionFields),
    Class.Public()
], Entity.prototype, "transactions", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('payment'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map