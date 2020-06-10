"use strict";
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
/**
 * Transaction types.
 */
var Transaction;
(function (Transaction) {
    /**
     * Transaction statuses.
     */
    let Status;
    (function (Status) {
        Status["Paid"] = "PAID";
        Status["Unpaid"] = "UNPAID";
        Status["Running"] = "RUNNING";
        Status["PartiallyPaid"] = "PARTIALLY_PAID";
    })(Status = Transaction.Status || (Transaction.Status = {}));
    /**
     * Transaction detailed statuses.
     */
    let DetailedStatus;
    (function (DetailedStatus) {
        DetailedStatus["Authorized"] = "AUTHORISED";
        DetailedStatus["Accepted"] = "ACCEPTED";
        DetailedStatus["Captured"] = "CAPTURED";
        DetailedStatus["AuthorizedToValidate"] = "AUTHORISED_TO_VALIDATE";
        DetailedStatus["PartiallyAuthorized"] = "PARTIALLY_AUTHORISED";
        DetailedStatus["Refused"] = "REFUSED";
        DetailedStatus["Error"] = "ERROR";
        DetailedStatus["Cancelled"] = "CANCELLED";
    })(DetailedStatus = Transaction.DetailedStatus || (Transaction.DetailedStatus = {}));
    /**
     * Transaction string authentications.
     */
    let StrongAuthentication;
    (function (StrongAuthentication) {
        StrongAuthentication["Enabled"] = "ENABLED";
        StrongAuthentication["Disabled"] = "DISABLED";
    })(StrongAuthentication = Transaction.StrongAuthentication || (Transaction.StrongAuthentication = {}));
    /**
     * Transaction operation.
     */
    let Operation;
    (function (Operation) {
        Operation["Debit"] = "DEBIT";
        Operation["Credit"] = "CREDIT";
        Operation["Verification"] = "VERIFICATION";
    })(Operation = Transaction.Operation || (Transaction.Operation = {}));
})(Transaction = exports.Transaction || (exports.Transaction = {}));
//# sourceMappingURL=transaction.js.map