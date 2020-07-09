/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Cancel or Refund transaction, entity class.
 */
export declare class Rollback extends Class.Null {
    /**
     * Transaction Id.
     * Use 32 characters.
     */
    uuid: string;
    /**
     * Amount value.
     * Max 12 integer digits.
     */
    amount?: number;
    /**
     * Rollback resolution mode.
     */
    resolutionMode?: Types.Resolution;
}
