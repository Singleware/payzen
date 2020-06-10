"use strict";
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
/**
 * Order types.
 */
var Order;
(function (Order) {
    /**
     * Order statuses.
     */
    let Status;
    (function (Status) {
        Status["Paid"] = "PAID";
        Status["Unpaid"] = "UNPAID";
        Status["Running"] = "RUNNING";
        Status["PartiallyPaid"] = "PARTIALLY_PAID";
    })(Status = Order.Status || (Order.Status = {}));
    /**
     * Order cycles.
     */
    let Cycle;
    (function (Cycle) {
        Cycle["Open"] = "OPEN";
        Cycle["Closed"] = "CLOSED";
    })(Cycle = Order.Cycle || (Order.Cycle = {}));
    /**
     * Order modes.
     */
    let Mode;
    (function (Mode) {
        Mode["Test"] = "TEST";
        Mode["Production"] = "PRODUCTION";
    })(Mode = Order.Mode || (Order.Mode = {}));
})(Order = exports.Order || (exports.Order = {}));
//# sourceMappingURL=order.js.map