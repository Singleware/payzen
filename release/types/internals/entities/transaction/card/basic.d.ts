/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../../../types';
/**
 * Basic card options, entity class.
 */
export declare class Basic extends Class.Null {
    /**
     * MId.
     * Max 128 characters.
     */
    mid?: string | null;
    /**
     * Payment source.
     */
    paymentSource?: Types.Payment.Source | null;
    /**
     * Number of attempts.
     * Integer between 0 and 9.
     */
    retry?: number | null;
}
