/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Test parser class.
 */
export declare class Test extends Class.Null {
    /**
     * Gets the test response value.
     * @param answer Answer entity.
     * @returns Returns the test response value or undefined when the test has been failed.
     */
    static getResponseValue<R>(answer: RestDB.Entity): R;
}
