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
 * Token authorization, entity class.
 */
let Authorization = class Authorization extends Class.Null {
};
__decorate([
    RestDB.Schema.Integer(0, 999999999999),
    RestDB.Schema.Null(),
    Class.Public()
], Authorization.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    RestDB.Schema.Null(),
    Class.Public()
], Authorization.prototype, "currency", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Authorization.prototype, "authorizationDate", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Authorization.Mode)),
    RestDB.Schema.Null(),
    Class.Public()
], Authorization.prototype, "authorizationMode", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(4, 6),
    Class.Public()
], Authorization.prototype, "authorizationNumber", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Authorization.prototype, "authorizationResult", void 0);
Authorization = __decorate([
    RestDB.Schema.Entity('Token/Details/Authorization'),
    Class.Describe()
], Authorization);
exports.Authorization = Authorization;
//# sourceMappingURL=authorization.js.map