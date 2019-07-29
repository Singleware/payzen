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
const Types = require("../../types");
const Internals = require("../../internals");
/**
 * Update subscription, entity class.
 */
let Update = class Update extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(1, 64),
    RestDB.Schema.Id(),
    Class.Public()
], Update.prototype, "subscriptionId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Update.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    Class.Public()
], Update.prototype, "currency", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    Class.Public()
], Update.prototype, "description", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Update.prototype, "effectDate", void 0);
__decorate([
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Update.prototype, "initialAmount", void 0);
__decorate([
    RestDB.Schema.Integer(0, 999),
    Class.Public()
], Update.prototype, "initialAmountNumber", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(32, 32),
    Class.Public()
], Update.prototype, "paymentMethodToken", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Update.prototype, "rrule", void 0);
__decorate([
    RestDB.Schema.Object(Internals.Entities.Transaction.Complete),
    Class.Public()
], Update.prototype, "transactionOptions", void 0);
Update = __decorate([
    RestDB.Schema.Entity('Subscription/Update'),
    Class.Describe()
], Update);
exports.Update = Update;
//# sourceMappingURL=update.js.map