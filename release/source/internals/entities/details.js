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
const Types = require("../../types");
/**
 * Generic details, entity class.
 */
let Details = class Details extends Class.Null {
};
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "address", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "address2", void 0);
__decorate([
    RestDB.Schema.String(0, 5),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "streetNumber", void 0);
__decorate([
    RestDB.Schema.String(0, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "city", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "district", void 0);
__decorate([
    RestDB.Schema.String(0, 127),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "state", void 0);
__decorate([
    RestDB.Schema.String(2, 2),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "country", void 0);
__decorate([
    RestDB.Schema.String(0, 64),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "zipCode", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Customer.Category)),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "category", void 0);
__decorate([
    RestDB.Schema.String(0, 63),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "firstName", void 0);
__decorate([
    RestDB.Schema.String(0, 63),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "lastName", void 0);
__decorate([
    RestDB.Schema.String(0, 150),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "identityCode", void 0);
__decorate([
    RestDB.Schema.String(0, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "phoneNumber", void 0);
__decorate([
    RestDB.Schema.String(0, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "cellPhoneNumber", void 0);
__decorate([
    RestDB.Schema.String(1, 8),
    RestDB.Schema.Null(),
    Class.Public()
], Details.prototype, "language", void 0);
Details = __decorate([
    RestDB.Schema.Entity('Generic/Details'),
    Class.Describe()
], Details);
exports.Details = Details;
//# sourceMappingURL=details.js.map