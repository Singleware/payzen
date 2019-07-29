/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Subscription parser class.
 */
export declare class Subscription extends Class.Null {
    /**
     * Gets the subscription response Id.
     * @param answer Answer entity.
     * @returns Returns the subscription response Id or undefined when the operation was failed.
     */
    static getResponseId(answer: RestDB.Entity): string | undefined;
    /**
     * Gets the subscription response code.
     * @param answer Answer entity.
     * @returns Returns the string 'ok' when the response code indicates success, undefined otherwise.
     */
    static getResponseCode(answer: RestDB.Entity): string | undefined;
}
