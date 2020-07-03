"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Common parser class.
 */
let Common = class Common extends Class.Null {
    /**
     * Gets the common response code.
     * @param answer Answer entity.
     * @returns Returns the string 'ok' when the response code indicates success, undefined otherwise.
     */
    static getResponseCode(answer) {
        if (answer.responseCode === void 0 || answer.responseCode !== 0) {
            throw new Error(`Unsupported answer response.`);
        }
        return 'ok';
    }
};
__decorate([
    Class.Public()
], Common, "getResponseCode", null);
Common = __decorate([
    Class.Describe()
], Common);
exports.Common = Common;
//# sourceMappingURL=common.js.map