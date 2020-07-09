/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Payments from '../payments';
import * as Order from '../orders';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Transaction entity class.
 */
export declare class Entity extends Class.Null {
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
     * Creation date.
     */
    creationDate?: Date;
    /**
     * Status.
     */
    status: Types.Status;
    /**
     * Detailed status.
     */
    detailedStatus: Types.DetailedStatus;
    /**
     * Order details.
     */
    orderDetails: Order.Internals.Details;
    /**
     * Customer details.
     */
    customer: Internals.Customer;
    /**
     * Error code.
     * Use 7 characters.
     */
    errorCode?: string | null;
    /**
     * Error message.
     * Max 127 characters.
     */
    errorMessage?: string | null;
    /**
     * Detailed error code.
     * Max 127 characters.
     */
    detailedErrorCode?: string | null;
    /**
     * Detailed error message.
     * Max 127 characters.
     */
    detailedErrorMessage?: string | null;
    /**
     * Effective strong authentication.
     */
    effectiveStrongAuthentication?: Types.StrongAuthentication;
    /**
     * Operation type.
     */
    operationType: Types.Operation;
    /**
     * Card token.
     * Use 32 characters.
     */
    paymentMethodToken?: string | null;
    /**
     * Payment method type.
     */
    paymentMethodType: Payments.Types.Method;
    /**
     * Shop Id.
     * Use 8 characters.
     */
    shopId: string;
    /**
     * Transaction details.
     */
    transactionDetails: Internals.Details;
}
