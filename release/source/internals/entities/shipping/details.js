"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../../../types");
const details_1 = require("../details");
/**
 * Shipping details, entity class.
 */
let Details = class Details extends details_1.Details {
};
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "deliveryCompanyName", void 0);
__decorate([
    RestDB.Schema.String(0, 100),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "legalName", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Shipping.Method)),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "shippingMethod", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Shipping.Speed)),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "shippingSpeed", void 0);
Details = __decorate([
    RestDB.Schema.Entity('Shipping/Details'),
    Class.Describe()
], Details);
exports.Details = Details;
//# sourceMappingURL=details.js.map