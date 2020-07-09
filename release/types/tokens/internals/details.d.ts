/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Payments from '../../payments';
import * as Types from '../types';
import { Authorization } from './authorization';
/**
 * Token details, entity class.
 */
export declare class Details extends Class.Null {
    /**
     * Card country.
     * Use 2 characters.
     */
    country?: string | null;
    /**
     * Effective card brand.
     */
    effectiveBrand?: Types.Brand | null;
    /**
     * Effective product code.
     * Max 3 characters.
     */
    effectiveProductCode?: string | null;
    /**
     * Expiration month.
     * Between 1 and 12 months.
     */
    expiryMonth: number;
    /**
     * Expiration year.
     * Between 10 and 9999 years.
     */
    expiryYear: number;
    /**
     * Issuer code.
     * Integer between 0 and 99999 digits.
     */
    issuerCode?: number | null;
    /**
     * Issuer name.
     * Max 255 characters.
     */
    issuerName?: string | null;
    /**
     * MId.
     * Max 128 characters.
     */
    mid?: string | null;
    /**
     * Primary Account Number.
     * Between 8 and 19 characters.
     */
    pan: string;
    /**
     * Payment source.
     */
    paymentSource?: Payments.Types.Source | null;
    /**
     * Authorization response.
     */
    authorizationResponse: Authorization;
}
