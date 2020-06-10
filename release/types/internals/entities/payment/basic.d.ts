/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../../types';
/**
 * Basic payment form, entity class.
 */
export declare class Basic extends Class.Null {
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
    identityDocumentType?: Types.Payment.Document | null;
    /**
     * Payment method type.
     */
    paymentMethodType: Types.Payment.Method;
    /**
     * MId.
     * Max 128 characters.
     */
    mid?: string | null;
}
