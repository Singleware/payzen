"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Card = require("./card");
/**
 * Transaction options, entity class.
 */
let Options = class Options extends Class.Null {
};
__decorate([
    RestDB.Schema.Object(Card.Options),
    RestDB.Schema.Null(),
    Class.Public()
], Options.prototype, "cardOptions", void 0);
Options = __decorate([
    RestDB.Schema.Entity('Transaction/Options'),
    Class.Describe()
], Options);
exports.Options = Options;
//# sourceMappingURL=options.js.map