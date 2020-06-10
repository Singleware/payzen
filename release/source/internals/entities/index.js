"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopping = exports.Shipping = exports.Billing = exports.Transaction = exports.Payment = exports.Order = exports.Token = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var customer_1 = require("./customer");
Object.defineProperty(exports, "Customer", { enumerable: true, get: function () { return customer_1.Customer; } });
// Imported aliases.
const Token = require("./token");
const Order = require("./order");
const Payment = require("./payment");
const Transaction = require("./transaction");
const Billing = require("./billing");
const Shipping = require("./shipping");
const Shopping = require("./shopping");
/**
 * Token namespace.
 */
exports.Token = Token;
/**
 * Order namespace.
 */
exports.Order = Order;
/**
 * Payment namespace.
 */
exports.Payment = Payment;
/**
 * Transaction namespace.
 */
exports.Transaction = Transaction;
/**
 * Billing namespace.
 */
exports.Billing = Billing;
/**
 * Shipping namespace.
 */
exports.Shipping = Shipping;
/**
 * Shopping namespace.
 */
exports.Shopping = Shopping;
//# sourceMappingURL=index.js.map