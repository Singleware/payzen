"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../../types");
/**
 * Transaction card update, entity class.
 */
let Update = class Update extends Class.Null {
};
__decorate([
    RestDB.Schema.Integer(0, 999999999999),
    RestDB.Schema.Null(),
    Class.Public()
], Update.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    RestDB.Schema.Null(),
    Class.Public()
], Update.prototype, "currency", void 0);
__decorate([
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Update.prototype, "expectedCaptureDate", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.ManualValidation)),
    RestDB.Schema.Null(),
    Class.Public()
], Update.prototype, "manualValidation", void 0);
Update = __decorate([
    RestDB.Schema.Entity('Transaction/Update'),
    Class.Describe()
], Update);
exports.Update = Update;
//# sourceMappingURL=update.js.map