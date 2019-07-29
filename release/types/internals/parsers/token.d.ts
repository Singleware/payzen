/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Token parser class.
 */
export declare class Token extends Class.Null {
    /**
     * Gets the token response Id.
     * @param answer Answer entity.
     * @returns Returns the token response Id or undefined when the operation was failed.
     */
    static getResponseId(answer: RestDB.Entity): string | undefined;
}
