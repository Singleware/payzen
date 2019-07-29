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
/**
 * Capture transaction, entity class.
 */
let Capture = class Capture extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String, [], true),
    Class.Public()
], Capture.prototype, "uuids", void 0);
__decorate([
    RestDB.Schema.Integer(0, 99),
    RestDB.Schema.Null(),
    Class.Public()
], Capture.prototype, "commission", void 0);
__decorate([
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Capture.prototype, "expectedCaptureDate", void 0);
Capture = __decorate([
    RestDB.Schema.Entity('Transaction/Capture'),
    Class.Describe()
], Capture);
exports.Capture = Capture;
//# sourceMappingURL=capture.js.map