/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../../types';
/**
 * Transaction details, entity class.
 */
export declare class Details extends Class.Null {
    /**
     * Creation context.
     */
    creationContext: Types.Transaction.Context;
    /**
     * Effective amount value.
     * Max 12 integer digits.
     */
    effectiveAmount: number;
    /**
     * Effective currency.
     */
    effectiveCurrency: Types.Currency;
    /**
     * Liability shift.
     */
    liabilityShift: Types.Transaction.Liability;
    /**
     * Parent transaction Id.
     * Use 32 characters.
     */
    parentTransactionUuid?: string | null;
    /**
     * Sequence number.
     * Max 6 integer digits.
     */
    sequenceNumber: number;
    /**
     * MId.
     * Max 128 characters.
     */
    mid: string;
}
