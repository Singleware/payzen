/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Payments from '../../payments';
/**
 * Token transaction, card options, entity class.
 */
export declare class Card extends Class.Null {
    /**
     * MId.
     * Max 128 characters.
     */
    mid?: string | null;
    /**
     * Payment source.
     */
    paymentSource?: Payments.Types.Source | null;
    /**
     * Number of attempts.
     * Integer between 0 and 9.
     */
    retry?: number | null;
}
