/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Item } from './item';
/**
 * Shopping cart, entity class.
 */
export declare class Cart extends Class.Null {
    /**
     * Insurance amount.
     * Max 12 characters.
     */
    insuranceAmount?: string | null;
    /**
     * Shipping amount.
     * Max 12 characters.
     */
    shippingAmount?: string | null;
    /**
     * Tax amount.
     * Max 12 characters.
     */
    taxAmount?: string | null;
    /**
     * Cart item list.
     */
    cartItemInfo?: Item[] | null;
}
