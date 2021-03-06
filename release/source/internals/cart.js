"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const item_1 = require("./item");
/**
 * Shopping cart, entity class.
 */
let Cart = class Cart extends Class.Null {
};
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 12),
    Class.Public()
], Cart.prototype, "insuranceAmount", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 12),
    Class.Public()
], Cart.prototype, "shippingAmount", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 12),
    Class.Public()
], Cart.prototype, "taxAmount", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Array(item_1.Item),
    Class.Public()
], Cart.prototype, "cartItemInfo", void 0);
Cart = __decorate([
    RestDB.Schema.Entity('Shopping/Cart'),
    Class.Describe()
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map