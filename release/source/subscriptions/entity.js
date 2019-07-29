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
/**
 * Subscription entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 64),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "subscriptionId", void 0);
__decorate([
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "cancelDate", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "effectDate", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "description", void 0);
__decorate([
    RestDB.Schema.Integer(0, 999999999999),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "initialAmount", void 0);
__decorate([
    RestDB.Schema.Integer(0, 999),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "initialAmountNumber", void 0);
__decorate([
    RestDB.Schema.Object(Object),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "metadata", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(8, 8),
    Class.Public()
], Entity.prototype, "shopId", void 0);
__decorate([
    RestDB.Schema.String(0, 64),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "orderId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999),
    Class.Public()
], Entity.prototype, "pastPaymentsNumber", void 0);
__decorate([
    RestDB.Schema.Integer(0, 999999),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "totalPaymentsNumber", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(32, 32),
    Class.Public()
], Entity.prototype, "paymentMethodToken", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Entity.prototype, "rrule", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('subscription'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map