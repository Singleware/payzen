"use strict";
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
/**
 * Details types.
 */
var Details;
(function (Details) {
    /**
     * Details contexts.
     */
    let Context;
    (function (Context) {
        Context["Charge"] = "CHARGE";
        Context["Refund"] = "REFUND";
        Context["Verification"] = "VERIFICATION";
    })(Context = Details.Context || (Details.Context = {}));
    /**
     * Details liability.
     */
    let Liability;
    (function (Liability) {
        Liability["No"] = "NO";
        Liability["Yes"] = "YES";
    })(Liability = Details.Liability || (Details.Liability = {}));
})(Details = exports.Details || (exports.Details = {}));
//# sourceMappingURL=details.js.map