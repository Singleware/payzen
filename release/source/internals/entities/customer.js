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
const Billing = require("./billing");
const Shipping = require("./shipping");
const Shopping = require("./shopping");
/**
 * Customer entity class.
 */
let Customer = class Customer extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(1, 150),
    Class.Public()
], Customer.prototype, "email", void 0);
__decorate([
    RestDB.Schema.String(0, 63),
    RestDB.Schema.Null(),
    Class.Public()
], Customer.prototype, "reference", void 0);
__decorate([
    RestDB.Schema.Object(Billing.Details),
    RestDB.Schema.Null(),
    Class.Public()
], Customer.prototype, "billingDetails", void 0);
__decorate([
    RestDB.Schema.Object(Shipping.Details),
    RestDB.Schema.Null(),
    Class.Public()
], Customer.prototype, "shippingDetails", void 0);
__decorate([
    RestDB.Schema.Object(Shopping.Cart),
    RestDB.Schema.Null(),
    Class.Public()
], Customer.prototype, "shoppingCart", void 0);
Customer = __decorate([
    RestDB.Schema.Entity('Customer'),
    Class.Describe()
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map