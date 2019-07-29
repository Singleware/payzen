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
 * Transaction details, entity class.
 */
let Details = class Details extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.Context)),
    Class.Public()
], Details.prototype, "creationContext", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Details.prototype, "effectiveAmount", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    Class.Public()
], Details.prototype, "effectiveCurrency", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Transaction.Liability)),
    Class.Public()
], Details.prototype, "liabilityShift", void 0);
__decorate([
    RestDB.Schema.String(32, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "parentTransactionUuid", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999),
    Class.Public()
], Details.prototype, "sequenceNumber", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 128),
    Class.Public()
], Details.prototype, "mid", void 0);
Details = __decorate([
    RestDB.Schema.Entity('Transaction/Details'),
    Class.Describe()
], Details);
exports.Details = Details;
//# sourceMappingURL=details.js.map