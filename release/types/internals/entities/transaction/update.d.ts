/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../../types';
/**
 * Transaction card update, entity class.
 */
export declare class Update extends Class.Null {
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
     * Expected capture date.
     */
    expectedCaptureDate?: Date | null;
    /**
     * Manual validation state.
     */
    manualValidation?: Types.Validation.Manual | null;
}
