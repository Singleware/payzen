/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Validate transaction, entity class.
 */
export declare class Validate extends Class.Null {
    /**
     * Transaction Id.
     * Use 32 characters.
     */
    uuid: string;
    /**
     * Validation comment.
     * Max 255 characters.
     */
    comment?: string;
}
