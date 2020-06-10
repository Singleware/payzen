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
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Internals = require("../../internals");
/**
 * Update transaction, entity class.
 */
let Update = class Update extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(32, 32),
    RestDB.Schema.Id(),
    Class.Public()
], Update.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Update.prototype, "comment", void 0);
__decorate([
    RestDB.Schema.Object(Internals.Entities.Transaction.Update),
    RestDB.Schema.Null(),
    Class.Public()
], Update.prototype, "cardUpdate", void 0);
Update = __decorate([
    RestDB.Schema.Entity('Transaction/Update'),
    Class.Describe()
], Update);
exports.Update = Update;
//# sourceMappingURL=update.js.map