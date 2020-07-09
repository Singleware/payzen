/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Token authorization, entity class.
 */
export declare class Authorization extends Class.Null {
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
     * Authorization date.
     */
    authorizationDate: Date;
    /**
     * Authorization mode.
     */
    authorizationMode?: Types.Authorization | null;
    /**
     * Authorization number.
     * Between 4 and 6 characters.
     */
    authorizationNumber?: string | null;
    /**
     * Authorization result.
     * Max 127 characters.
     */
    authorizationResult?: string | null;
}
