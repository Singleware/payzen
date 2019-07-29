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
/**
 * Basic payment form, entity class.
 */
let Basic = class Basic extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(8, 19),
    Class.Public()
], Basic.prototype, "pan", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(2, 2),
    Class.Public()
], Basic.prototype, "expiryMonth", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(2, 2),
    Class.Public()
], Basic.prototype, "expiryYear", void 0);
__decorate([
    RestDB.Schema.String(3, 4),
    RestDB.Schema.Null(),
    Class.Public()
], Basic.prototype, "securityCode", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Brand)),
    RestDB.Schema.Null(),
    Class.Public()
], Basic.prototype, "brand", void 0);
__decorate([
    RestDB.Schema.String(2, 45),
    RestDB.Schema.Null(),
    Class.Public()
], Basic.prototype, "cardHolderName", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Basic.prototype, "identityDocumentNumber", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Document)),
    RestDB.Schema.Null(),
    Class.Public()
], Basic.prototype, "identityDocumentType", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Method)),
    Class.Public()
], Basic.prototype, "paymentMethodType", void 0);
__decorate([
    RestDB.Schema.String(0, 128),
    RestDB.Schema.Null(),
    Class.Public()
], Basic.prototype, "mid", void 0);
Basic = __decorate([
    RestDB.Schema.Entity('Basic/Payment/Form'),
    Class.Describe()
], Basic);
exports.Basic = Basic;
//# sourceMappingURL=basic.js.map