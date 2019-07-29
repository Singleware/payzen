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
const authorization_1 = require("./authorization");
/**
 * Token details, entity class.
 */
let Details = class Details extends Class.Null {
};
__decorate([
    RestDB.Schema.String(2, 2),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "country", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Brand)),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "effectiveBrand", void 0);
__decorate([
    RestDB.Schema.String(0, 3),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "effectiveProductCode", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(1, 12),
    Class.Public()
], Details.prototype, "expiryMonth", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(10, 9999),
    Class.Public()
], Details.prototype, "expiryYear", void 0);
__decorate([
    RestDB.Schema.Integer(0, 99999),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "issuerCode", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "issuerName", void 0);
__decorate([
    RestDB.Schema.String(0, 128),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "mid", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(8, 19),
    Class.Public()
], Details.prototype, "pan", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Source)),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "paymentSource", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(authorization_1.Authorization),
    Class.Public()
], Details.prototype, "authorizationResponse", void 0);
Details = __decorate([
    RestDB.Schema.Entity('Token/Details'),
    Class.Describe()
], Details);
exports.Details = Details;
//# sourceMappingURL=details.js.map