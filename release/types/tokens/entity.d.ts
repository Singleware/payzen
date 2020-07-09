/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Payments from '../payments';
import * as Internals from './internals';
/**
 * Token entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Card token.
     * Use 32 characters.
     */
    paymentMethodToken: string;
    /**
     * Cancellation date.
     */
    cancellationDate?: Date | null;
    /**
     * Creation date.
     */
    creationDate: Date;
    /**
     * Payment method type.
     */
    paymentMethodType: Payments.Types.Method;
    /**
     * Customer details.
     */
    customer: Internals.Customer;
    /**
     * Token details.
     */
    tokenDetails: Internals.Details;
}
