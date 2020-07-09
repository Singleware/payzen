"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Payments = require("../../payments");
/**
 * Token transaction, card options, entity class.
 */
let Card = class Card extends Class.Null {
};
__decorate([
    RestDB.Schema.String(0, 128),
    RestDB.Schema.Null(),
    Class.Public()
], Card.prototype, "mid", void 0);
__decorate([
    RestDB.Schema.Enumeration(() => Object.values(Payments.Types.Source)),
    RestDB.Schema.Null(),
    Class.Public()
], Card.prototype, "paymentSource", void 0);
__decorate([
    RestDB.Schema.Integer(0, 9),
    RestDB.Schema.Null(),
    Class.Public()
], Card.prototype, "retry", void 0);
Card = __decorate([
    RestDB.Schema.Entity('Token/Options/Card'),
    Class.Describe()
], Card);
exports.Card = Card;
//# sourceMappingURL=card.js.map