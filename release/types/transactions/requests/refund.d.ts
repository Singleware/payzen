/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Refund transaction, entity class.
 */
export declare class Refund extends Class.Null {
    /**
     * Transaction Id.
     * Use 32 characters.
     */
    uuid: string;
    /**
     * Amount value.
     * Max 12 integer digits.
     */
    amount: number;
}
