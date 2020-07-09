"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duplicate = void 0;
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
const Internals = require("../internals");
/**
 * Duplicate transaction, entity class.
 */
let Duplicate = class Duplicate extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(32, 32),
    RestDB.Schema.Id(),
    Class.Public()
], Duplicate.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Duplicate.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    Class.Public()
], Duplicate.prototype, "currency", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    Class.Public()
], Duplicate.prototype, "comment", void 0);
__decorate([
    RestDB.Schema.String(0, 64),
    Class.Public()
], Duplicate.prototype, "orderId", void 0);
__decorate([
    RestDB.Schema.Object(Object),
    Class.Public()
], Duplicate.prototype, "metadata", void 0);
__decorate([
    RestDB.Schema.Object(Internals.Card.Duplicate),
    Class.Public()
], Duplicate.prototype, "cardDuplicate", void 0);
Duplicate = __decorate([
    RestDB.Schema.Entity('Transaction/Duplicate'),
    Class.Describe()
], Duplicate);
exports.Duplicate = Duplicate;
//# sourceMappingURL=duplicate.js.map