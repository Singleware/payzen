/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Transactions from '../../transactions';
import * as Types from '../types';
import * as Internals from '../internals';
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
    contrib?: string;
    /**
     * Amount currency.
     */
    currency: Types.Currency;
    /**
     * Determines which version of the formToken will be used.
     * Integer between 0 and 999.
     */
    formTokenVersion?: number;
    /**
     * Target URL for event notifications about the request.
     * Max 255 characters.
     */
    ipnTargetUrl?: string;
    /**
     * Request order Id.
     * Max 64 characters.
     */
    orderId?: string;
    /**
     * Custom metadata for the request.
     */
    metadata?: RestDB.Entity;
    /**
     * Request finger print.
     * Required for ClearSale analyzer, 128 characters.
     */
    fingerPrintId?: string;
    /**
     * Request action.
     */
    formAction?: Types.Action;
    /**
     * Allow changes in the delivery mode.
     * Between 6 and 17 characters.
     */
    overridePaymentCinematic?: string;
    /**
     * Pre-saved card token.
     * Max 32 characters.
     */
    paymentMethodToken?: string;
    /**
     * Determines whether the request will use strong authentication or not.
     */
    strongAuthentication?: Transactions.Types.StrongAuthentication;
    /**
     * Custom data to the acquirer.
     */
    acquirerTransientData?: RestDB.Entity;
    /**
     * Customer details.
     */
    customer: Internals.Customer;
    /**
     * Transaction options.
     */
    transactionOptions?: Transactions.Internals.Options;
    /**
     * Payment forms.
     */
    paymentForms?: Internals.Form[];
}
