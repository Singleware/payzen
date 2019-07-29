"use strict";
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Transaction states.
 */
var State;
(function (State) {
    State["Authorized"] = "AUTHORISED";
    State["Captured"] = "CAPTURED";
    State["AuthorizedToValidate"] = "AUTHORISED_TO_VALIDATE";
    State["PartiallyAuthorized"] = "PARTIALLY_AUTHORISED";
    State["Refused"] = "REFUSED";
    State["Error"] = "ERROR";
    State["Cancelled"] = "CANCELLED";
})(State = exports.State || (exports.State = {}));
//# sourceMappingURL=state.js.map