/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Payments from '../../payments';
import * as Types from '../../types';
import * as Internals from '../internals';
/**
 * Create token, entity class.
 */
export declare class Create extends Class.Null {
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
     * Customer details.
     */
    customer: Internals.Customer;
    /**
     * Transaction options.
     */
    transactionOptions?: Internals.Options;
    /**
     * Payment forms.
     */
    paymentForms?: Payments.Internals.Form[];
}
