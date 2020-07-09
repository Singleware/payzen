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
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const card_1 = require("./card");
/**
 * Token transaction options, entity class.
 */
let Options = class Options extends Class.Null {
};
__decorate([
    RestDB.Schema.Object(card_1.Card),
    RestDB.Schema.Null(),
    Class.Public()
], Options.prototype, "cardOptions", void 0);
Options = __decorate([
    RestDB.Schema.Entity('Token/Options'),
    Class.Describe()
], Options);
exports.Options = Options;
//# sourceMappingURL=options.js.map