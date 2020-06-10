"use strict";
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipping = void 0;
/**
 * Shipping types.
 */
var Shipping;
(function (Shipping) {
    /**
     * Shipping methods.
     */
    let Method;
    (function (Method) {
        Method["Standard"] = "STANDARD";
        Method["Express"] = "EXPRESS";
        Method["Priority"] = "PRIORITY";
    })(Method = Shipping.Method || (Shipping.Method = {}));
    /**
     * Shipping speeds.
     */
    let Speed;
    (function (Speed) {
        Speed["ReclaimInShop"] = "RECLAIM_IN_SHOP";
        Speed["RelayPoint"] = "RELAY_POINT";
        Speed["ReclaimInStation"] = "RECLAIM_IN_STATION";
        Speed["PackageDeliveryCompany"] = "PACKAGE_DELIVERY_COMPANY";
        Speed["ETicket"] = "ETICKET";
    })(Speed = Shipping.Speed || (Shipping.Speed = {}));
})(Shipping = exports.Shipping || (exports.Shipping = {}));
//# sourceMappingURL=shipping.js.map