"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Customer = exports.Validation = exports.Authentication = exports.Authorization = exports.Transaction = exports.Shipping = exports.Product = exports.Order = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var brand_1 = require("./brand");
Object.defineProperty(exports, "Brand", { enumerable: true, get: function () { return brand_1.Brand; } });
var currency_1 = require("./currency");
Object.defineProperty(exports, "Currency", { enumerable: true, get: function () { return currency_1.Currency; } });
// Imported aliases.
const Order = require("./order");
const Product = require("./product");
const Shipping = require("./shipping");
const Transaction = require("./transaction");
const Authorization = require("./authorization");
const Authentication = require("./authentication");
const Validation = require("./validation");
const Customer = require("./customer");
const Payment = require("./payment");
/**
 * Order namespace.
 */
exports.Order = Order;
/**
 * Product namespace.
 */
exports.Product = Product;
/**
 * Shipping namespace.
 */
exports.Shipping = Shipping;
/**
 * Transaction namespace.
 */
exports.Transaction = Transaction;
/**
 * Authorization namespace.
 */
exports.Authorization = Authorization;
/**
 * Authentication namespace.
 */
exports.Authentication = Authentication;
/**
 * Validation namespace.
 */
exports.Validation = Validation;
/**
 * Customer namespace.
 */
exports.Customer = Customer;
/**
 * Payment namespace.
 */
exports.Payment = Payment;
//# sourceMappingURL=index.js.map