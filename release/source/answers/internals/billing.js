"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Billing details, entity class.
 */
let Billing = class Billing extends Class.Null {
};
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Billing.prototype, "address", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Billing.prototype, "address2", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 5),
    Class.Public()
], Billing.prototype, "streetNumber", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 32),
    Class.Public()
], Billing.prototype, "city", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 128),
    Class.Public()
], Billing.prototype, "district", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 127),
    Class.Public()
], Billing.prototype, "state", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(2, 2),
    Class.Public()
], Billing.prototype, "country", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 64),
    Class.Public()
], Billing.prototype, "zipCode", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Enumeration(Object.values(Types.Customer.Category)),
    Class.Public()
], Billing.prototype, "category", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 63),
    Class.Public()
], Billing.prototype, "firstName", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 63),
    Class.Public()
], Billing.prototype, "lastName", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 150),
    Class.Public()
], Billing.prototype, "identityCode", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 32),
    Class.Public()
], Billing.prototype, "phoneNumber", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 32),
    Class.Public()
], Billing.prototype, "cellPhoneNumber", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(1, 8),
    Class.Public()
], Billing.prototype, "language", void 0);
Billing = __decorate([
    RestDB.Schema.Entity('Billing/Details'),
    Class.Describe()
], Billing);
exports.Billing = Billing;
//# sourceMappingURL=billing.js.map