/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Types from '../../types';
import * as Internals from '../../internals';
/**
 * Duplicate transaction, entity class.
 */
export declare class Duplicate extends Class.Null {
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
    /**
     * Amount currency.
     */
    currency: Types.Currency;
    /**
     * Updating comment.
     * Max 255 characters.
     */
    comment?: string | null;
    /**
     * Request order Id.
     * Max 64 characters.
     */
    orderId?: string | null;
    /**
     * Custom metadata for the request.
     */
    metadata?: RestDB.Entity | null;
    /**
     * Card payment duplicate.
     */
    cardDuplicate?: Internals.Entities.Transaction.Duplicate | null;
}
