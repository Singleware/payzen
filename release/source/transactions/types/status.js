"use strict";
/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailedStatus = exports.Status = void 0;
/**
 * Transaction statuses.
 */
var Status;
(function (Status) {
    Status["Paid"] = "PAID";
    Status["Unpaid"] = "UNPAID";
    Status["Running"] = "RUNNING";
    Status["PartiallyPaid"] = "PARTIALLY_PAID";
})(Status = exports.Status || (exports.Status = {}));
/**
 * Transaction detailed statuses.
 */
var DetailedStatus;
(function (DetailedStatus) {
    DetailedStatus["Authorized"] = "AUTHORISED";
    DetailedStatus["Accepted"] = "ACCEPTED";
    DetailedStatus["Captured"] = "CAPTURED";
    DetailedStatus["AuthorizedToValidate"] = "AUTHORISED_TO_VALIDATE";
    DetailedStatus["PartiallyAuthorized"] = "PARTIALLY_AUTHORISED";
    DetailedStatus["Refused"] = "REFUSED";
    DetailedStatus["Error"] = "ERROR";
    DetailedStatus["Cancelled"] = "CANCELLED";
})(DetailedStatus = exports.DetailedStatus || (exports.DetailedStatus = {}));
//# sourceMappingURL=status.js.map