/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Capture transaction, entity class.
 */
export declare class Capture extends Class.Null {
    /**
     * Transactions Id list.
     * Use 32 characters for each Id.
     */
    uuids: string[];
    /**
     * Commission value.
     * Max 2 integer digits.
     */
    commission?: number | null;
    /**
     * Expected capture date.
     */
    expectedCaptureDate?: Date | null;
}
