"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Create token from transaction, entity class.
 */
let Transaction = class Transaction extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(32, 32),
    RestDB.Schema.Id(),
    Class.Public()
], Transaction.prototype, "uuid", void 0);
Transaction = __decorate([
    RestDB.Schema.Entity('Charge/CreateTokenFromTransaction'),
    Class.Describe()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map