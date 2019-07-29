/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../types';
import * as Internals from '../../internals';
/**
 * Update subscription, entity class.
 */
export declare class Update extends Class.Null {
    /**
     * Subscription Id.
     * Max 64 characters.
     */
    subscriptionId: string;
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
     * Subscription description.
     * Max 255 characters.
     */
    description?: string;
    /**
     * Subscription effect date.
     */
    effectDate: Date;
    /**
     * Initial amount used for the first installment.
     * Max 12 integer digits.
     */
    initialAmount?: number;
    /**
     * Initial amount installment number.
     * Integer between 0 and 999 digits.
     */
    initialAmountNumber?: number;
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
    transactionOptions?: Internals.Entities.Transaction.Complete;
}
