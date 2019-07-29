/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Cancel token, entity class.
 */
export declare class Cancel extends Class.Null {
    /**
     * Card token.
     * Use 32 characters.
     */
    paymentMethodToken: string;
}
