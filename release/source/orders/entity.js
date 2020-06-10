"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Internals = require("../internals");
/**
 * Order entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 64),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "orderId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(8, 8),
    Class.Public()
], Entity.prototype, "shopId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Entities.Order.Transaction),
    Class.Public()
], Entity.prototype, "transactions", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('order'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map