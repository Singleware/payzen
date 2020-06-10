"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipping = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Shipping details, entity class.
 */
let Shipping = class Shipping extends Class.Null {
};
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 127),
    Class.Public()
], Shipping.prototype, "deliveryCompanyName", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 100),
    Class.Public()
], Shipping.prototype, "legalName", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Shipping.Method)),
    RestDB.Schema.Null(),
    Class.Public()
], Shipping.prototype, "shippingMethod", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Shipping.Speed)),
    RestDB.Schema.Null(),
    Class.Public()
], Shipping.prototype, "shippingSpeed", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Shipping.prototype, "address", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Shipping.prototype, "address2", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 5),
    Class.Public()
], Shipping.prototype, "streetNumber", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 32),
    Class.Public()
], Shipping.prototype, "city", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 128),
    Class.Public()
], Shipping.prototype, "district", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 127),
    Class.Public()
], Shipping.prototype, "state", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(2, 2),
    Class.Public()
], Shipping.prototype, "country", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 64),
    Class.Public()
], Shipping.prototype, "zipCode", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Enumeration(Object.values(Types.Customer.Category)),
    Class.Public()
], Shipping.prototype, "category", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 63),
    Class.Public()
], Shipping.prototype, "firstName", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 63),
    Class.Public()
], Shipping.prototype, "lastName", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 150),
    Class.Public()
], Shipping.prototype, "identityCode", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 32),
    Class.Public()
], Shipping.prototype, "phoneNumber", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 32),
    Class.Public()
], Shipping.prototype, "cellPhoneNumber", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(1, 8),
    Class.Public()
], Shipping.prototype, "language", void 0);
Shipping = __decorate([
    RestDB.Schema.Entity('Shipping/Details'),
    Class.Describe()
], Shipping);
exports.Shipping = Shipping;
//# sourceMappingURL=shipping.js.map