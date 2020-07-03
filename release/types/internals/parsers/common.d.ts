/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Common parser class.
 */
export declare class Common extends Class.Null {
    /**
     * Gets the common response code.
     * @param answer Answer entity.
     * @returns Returns the string 'ok' when the response code indicates success, undefined otherwise.
     */
    static getResponseCode<R>(answer: RestDB.Entity): R;
}
