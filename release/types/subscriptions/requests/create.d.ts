/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Types from '../../types';
import * as Internals from '../../internals';
/**
 * Create subscription, entity class.
 */
export declare class Create extends Class.Null {
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
     * Subscription comment.
     * Max 255 characters.
     */
    comment?: string | null;
    /**
     * Subscription description.
     * Max 255 characters.
     */
    description?: string | null;
    /**
     * Subscription effect date.
     */
    effectDate: Date;
    /**
     * Initial amount used for the first installment.
     * Max 12 integer digits.
     */
    initialAmount?: number | null;
    /**
     * Initial amount installment number.
     * Integer between 0 and 999 digits.
     */
    initialAmountNumber?: number | null;
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
     * Card token.
     * Use 32 characters.
     */
    paymentMethodToken: string;
    /**
     * Recurrence rule.
     * Max 255 characters.
     * @see https://www.nylas.com/blog/calendar-events-rrules/
     */
    rrule: string;
    /**
     * Transaction options.
     */
    transactionOptions?: Internals.Entities.Transaction.Complete | null;
}
