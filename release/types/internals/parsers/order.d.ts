/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Order parser class.
 */
export declare class Order extends Class.Null {
    /**
     * Gets the order response Id.
     * @param answer Answer entity.
     * @returns Returns the order response Id or undefined when the operation was failed.
     */
    static getResponseId<R>(answer: RestDB.Entity): R;
    /**
     * Gets the subscription response code.
     * @param answer Answer entity.
     * @returns Returns the string 'ok' when the response code indicates success, undefined otherwise.
     */
    static getResponseCode(answer: RestDB.Entity): string | undefined;
}
