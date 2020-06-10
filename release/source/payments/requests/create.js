"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../../types");
const Internals = require("../../internals");
/**
 * Create payment, entity class.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0, 999999999999),
    Class.Public()
], Create.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.String(0, 128),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "contrib", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Currency)),
    Class.Public()
], Create.prototype, "currency", void 0);
__decorate([
    RestDB.Schema.Number(0, 999),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "formTokenVersion", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "ipnTargetUrl", void 0);
__decorate([
    RestDB.Schema.String(0, 64),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "orderId", void 0);
__decorate([
    RestDB.Schema.Object(Object),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "metadata", void 0);
__decorate([
    RestDB.Schema.String(128, 128),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fingerPrintId", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Action)),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "formAction", void 0);
__decorate([
    RestDB.Schema.String(6, 17),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "overridePaymentCinematic", void 0);
__decorate([
    RestDB.Schema.String(1, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "paymentMethodToken", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Authentication.Strong)),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "strongAuthentication", void 0);
__decorate([
    RestDB.Schema.Object(Object),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "acquirerTransientData", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Entities.Customer),
    Class.Public()
], Create.prototype, "customer", void 0);
__decorate([
    RestDB.Schema.Object(Internals.Entities.Transaction.Complete),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "transactionOptions", void 0);
__decorate([
    RestDB.Schema.Array(Internals.Entities.Payment.Complete, [], true, 0, 1),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "paymentForms", void 0);
Create = __decorate([
    RestDB.Schema.Entity('Charge/CreatePayment'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map