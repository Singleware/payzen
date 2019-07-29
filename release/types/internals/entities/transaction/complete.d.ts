/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Card from './card';
/**
 * Complete transaction options, entity class.
 */
export declare class Complete extends Class.Null {
    /**
     * Card options.
     */
    cardOptions?: Card.Complete | null;
}