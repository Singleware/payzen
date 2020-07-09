/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Card from './card';
/**
 * Transaction options, entity class.
 */
export declare class Options extends Class.Null {
    /**
     * Card options.
     */
    cardOptions?: Card.Options | null;
}
