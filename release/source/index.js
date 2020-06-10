"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.Orders = exports.Transactions = exports.Subscriptions = exports.Payments = exports.Tokens = exports.Tests = exports.Internals = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var client_1 = require("./client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_1.Client; } });
// Imported aliases.
const Internals = require("./internals");
const Tests = require("./tests");
const Tokens = require("./tokens");
const Payments = require("./payments");
const Transactions = require("./transactions");
const Subscriptions = require("./subscriptions");
const Orders = require("./orders");
const Types = require("./types");
/**
 * Internals namespace.
 */
exports.Internals = Internals;
/**
 * Tests namespace.
 */
exports.Tests = Tests;
/**
 * Tokens namespace.
 */
exports.Tokens = Tokens;
/**
 * Payments namespace.
 */
exports.Payments = Payments;
/**
 * Subscriptions namespace.
 */
exports.Subscriptions = Subscriptions;
/**
 * Transactions namespace.
 */
exports.Transactions = Transactions;
/**
 * Orders namespace.
 */
exports.Orders = Orders;
/**
 * Types namespace.
 */
exports.Types = Types;
//# sourceMappingURL=index.js.map