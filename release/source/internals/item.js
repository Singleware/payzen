"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Shopping cart item, entity class.
 */
let Item = class Item extends Class.Null {
};
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 12),
    Class.Public()
], Item.prototype, "productAmount", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Item.prototype, "productLabel", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Item.prototype, "productQty", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.String(0, 64),
    Class.Public()
], Item.prototype, "productRef", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Enumeration(Object.values(Types.Product.Category)),
    Class.Public()
], Item.prototype, "productType", void 0);
__decorate([
    RestDB.Schema.Null(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Item.prototype, "productVat", void 0);
Item = __decorate([
    RestDB.Schema.Entity('Shopping/Cart/Item'),
    Class.Describe()
], Item);
exports.Item = Item;
//# sourceMappingURL=item.js.map