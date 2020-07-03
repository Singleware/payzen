/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Payment parser class.
 */
export declare class Payment extends Class.Null {
    /**
     * Gets the payment response Id.
     * @param answer Answer entity.
     * @returns Returns the payment response Id or undefined when the operation was failed.
     */
    static getResponseId<R>(answer: RestDB.Entity): R;
}
