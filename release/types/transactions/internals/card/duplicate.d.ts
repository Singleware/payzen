/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../types';
/**
 * Transaction card duplicate, entity class.
 */
export declare class Duplicate extends Class.Null {
    /**
     * Amount value.
     * Between 0 and 365 days.
     */
    captureDelay?: number | null;
    /**
     * Manual validation state.
     */
    manualValidation?: Types.ManualValidation | null;
}
