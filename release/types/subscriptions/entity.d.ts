/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Subscription entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Subscription Id.
     * Max 64 characters.
     */
    subscriptionId: string;
    /**
     * Cancel date.
     */
    cancelDate?: Date | null;
    /**
     * Effect date.
     */
    effectDate: Date;
    /**
     * Description.
     * Max 255 characters.
     */
    description?: string | null;
    /**
     * Initial amount used for the first installment.
     * Max 12 integer digits.
     */
    initialAmount?: string | null;
    /**
     * Initial amount installment number.
     * Integer between 0 and 999 installments.
     */
    initialAmountNumber?: number | null;
    /**
     * Custom metadata for the subscription.
     */
    metadata?: RestDB.Entity | null;
    /**
     * Subscription shop Id.
     * Use 8 characters.
     */
    shopId: string;
    /**
     * Subscription order Id.
     * Max 64 characters.
     */
    orderId?: string | null;
    /**
     * Finalized payments.
     * Integer between 0 and 999999 digits.
     */
    pastPaymentsNumber: number;
    /**
     * Total payments.
     * Integer between 0 and 999999 digits.
     */
    totalPaymentsNumber?: number | null;
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
}
