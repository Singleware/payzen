/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Internals from '../internals';
/**
 * Update transaction, entity class.
 */
export declare class Update extends Class.Null {
    /**
     * Transaction Id.
     * Use 32 characters.
     */
    uuid: string;
    /**
     * Updating comment.
     * Max 255 characters.
     */
    comment?: string;
    /**
     * Card payment update.
     */
    cardUpdate?: Internals.Card.Update;
}
