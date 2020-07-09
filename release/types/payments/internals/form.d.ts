/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Transactions from '../../transactions';
import * as Types from '../types';
/**
 * Payment form, entity class.
 */
export declare class Form extends Class.Null {
    /**
     * Primary Account Number.
     * Between 8 and 19 characters.
     */
    pan?: string;
    /**
     * Expiration month.
     * Use 2 character digits.
     */
    expiryMonth?: string;
    /**
     * Expiration year.
     * Use 2 character digits.
     */
    expiryYear?: string;
    /**
     * Security code.
     * Between 3 and 4 characters.
     */
    securityCode?: string | null;
    /**
     * Card brand.
     */
    brand?: Types.Brand | null;
    /**
     * Card holder name.
     * Between 2 and 45 characters.
     */
    cardHolderName?: string | null;
    /**
     * Identity document number.
     */
    identityDocumentNumber?: string | null;
    /**
     * Identity document type.
     */
    identityDocumentType?: Types.Document | null;
    /**
     * Payment method type.
     */
    paymentMethodType: Types.Method;
    /**
     * MId.
     * Max 128 characters.
     */
    mid?: string | null;
    /**
     * Number of months to delay the first installment for a installment payment.
     * Integer between 0 and 99 months.
     */
    firstInstallmentDelay?: number;
    /**
     * Installment number.
     * Integer between 0 and 999 months.
     */
    installmentNumber?: number | null;
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
    strongAuthentication?: Transactions.Types.StrongAuthentication | null;
}
