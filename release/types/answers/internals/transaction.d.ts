/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Types from '../types';
import { Details } from './details';
/**
 * Transaction entity class.
 */
export declare class Transaction extends Class.Null {
    /**
     * Transaction Id.
     * Use 32 characters.
     */
    uuid?: string | null;
    /**
     * Shop Id.
     * Use 8 characters.
     */
    shopId?: string | null;
    /**
     * Amount value.
     * Max 12 integer digits.
     */
    amount?: number | null;
    /**
     * Amount currency.
     */
    currency?: Types.Currency | null;
    /**
     * Creation date.
     */
    creationDate?: Date | null;
    /**
     * Status.
     */
    status?: Types.Transaction.Status | null;
    /**
     * Detailed status.
     */
    detailedStatus?: Types.Transaction.DetailedStatus | null;
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
    effectiveStrongAuthentication?: Types.Transaction.StrongAuthentication | null;
    /**
     * Operation type.
     */
    operationType?: Types.Transaction.Operation | null;
    /**
     * Card token.
     * Use 32 characters.
     */
    paymentMethodToken?: string | null;
    /**
     * Payment method type.
     */
    paymentMethodType?: Types.Payment.Method | null;
    /**
     * Transaction metadata.
     */
    metadata?: RestDB.Entity | null;
    /**
     * Transaction details.
     */
    transactionDetails: Details;
}
