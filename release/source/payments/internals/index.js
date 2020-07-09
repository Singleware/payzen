"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightTransactionFields = void 0;
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var internals_1 = require("../../internals");
Object.defineProperty(exports, "Customer", { enumerable: true, get: function () { return internals_1.Customer; } });
var form_1 = require("./form");
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return form_1.Form; } });
/**
 * Light transaction fields.
 */
exports.LightTransactionFields = [
    'uuid',
    'amount',
    'currency',
    'creationDate',
    'status',
    'detailedStatus',
    'customer',
    'errorCode',
    'errorMessage',
    'detailedErrorCode',
    'detailedErrorMessage',
    'effectiveStrongAuthentication',
    'operationType',
    'paymentMethodToken',
    'paymentMethodType',
    'shopId',
    'transactionDetails'
];
//# sourceMappingURL=index.js.map