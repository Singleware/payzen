/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Types from '../../types';
import * as Internals from '../../internals';
/**
 * Create payment, entity class.
 */
export declare class Create extends Class.Null {
    /**
     * Amount value.
     * Max 12 integer digits.
     */
    amount: number;
    /**
     * Application name and version.
     * Max 128 characters.
     */
    contrib?: string | null;
    /**
     * Amount currency.
     */
    currency: Types.Currency;
    /**
     * Determines which version of the formToken will be used.
     * Integer between 0 and 999.
     */
    formTokenVersion?: number | null;
    /**
     * Target URL for event notifications about the request.
     * Max 255 characters.
     */
    ipnTargetUrl?: string | null;
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
     * Request finger print.
     * Required for ClearSale analyzer, 128 characters.
     */
    fingerPrintId?: string | null;
    /**
     * Request action.
     */
    formAction?: Types.Payment.Action | null;
    /**
     * Allow changes in the delivery mode.
     * Between 6 and 17 characters.
     */
    overridePaymentCinematic?: string | null;
    /**
     * Pre-saved card token.
     * Max 32 characters.
     */
    paymentMethodToken?: string | null;
    /**
     * Determines whether the request will use strong authentication or not.
     */
    strongAuthentication?: Types.Authentication.Strong | null;
    /**
     * Custom data to the acquirer.
     */
    acquirerTransientData?: RestDB.Entity | null;
    /**
     * Customer details.
     */
    customer: Internals.Entities.Customer;
    /**
     * Transaction options.
     */
    transactionOptions?: Internals.Entities.Transaction.Complete | null;
    /**
     * Payment forms.
     */
    paymentForms?: Internals.Entities.Payment.Complete[] | null;
}
