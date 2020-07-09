/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Transaction details, entity class.
 */
export declare class Details extends Class.Null {
    /**
     * Creation context.
     */
    creationContext?: Types.Context | null;
    /**
     * Effective amount value.
     * Max 12 integer digits.
     */
    effectiveAmount?: number | null;
    /**
     * Effective currency.
     */
    effectiveCurrency?: Types.Currency | null;
    /**
     * Liability shift.
     */
    liabilityShift?: Types.Liability | null;
    /**
     * Parent transaction Id.
     * Use 32 characters.
     */
    parentTransactionUuid?: string | null;
    /**
     * Sequence number.
     * Max 6 integer digits.
     */
    sequenceNumber?: number | null;
    /**
     * MId.
     * Max 128 characters.
     */
    mid?: string | null;
}
