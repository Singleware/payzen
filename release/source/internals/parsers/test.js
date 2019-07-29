"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Test parser class.
 */
let Test = class Test extends Class.Null {
    /**
     * Gets the test response value.
     * @param answer Answer entity.
     * @returns Returns the test response value or undefined when the test has been failed.
     */
    static getResponseValue(answer) {
        if (answer.value === void 0) {
            throw new Error(`Unsupported token response.`);
        }
        return answer.value;
    }
};
__decorate([
    Class.Public()
], Test, "getResponseValue", null);
Test = __decorate([
    Class.Describe()
], Test);
exports.Test = Test;
//# sourceMappingURL=test.js.map