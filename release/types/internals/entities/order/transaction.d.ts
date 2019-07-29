/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../../types';
import * as Order from '../order';
import { Customer } from '../customer';
/**
 * Order transaction, entity class.
 */
export declare class Transaction extends Class.Null {
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
    status: Types.Transaction.Status;
    /**
     * Detailed status.
     */
    detailedStatus: Types.Transaction.State;
    /**
     * Order details.
     */
    orderDetails: Order.Details;
    /**
     * Customer details.
     */
    customer: Customer;
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
    effectiveStrongAuthentication?: Types.Authentication.Strong;
    /**
     * Operation type.
     */
    operationType: Types.Transaction.Mode;
    /**
     * Card token.
     * Use 32 characters.
     */
    paymentMethodToken?: string | null;
    /**
     * Payment method type.
     */
    paymentMethodType: Types.Payment.Method;
    /**
     * Shop Id.
     * Use 8 characters.
     */
    shopId: string;
}
