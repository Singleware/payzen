/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Shopping cart item, entity class.
 */
export declare class Item extends Class.Null {
    /**
     * Product amount.
     * Max 12 characters.
     */
    productAmount?: string | null;
    /**
     * Product label.
     * Max 255 characters.
     */
    productLabel?: string | null;
    /**
     * Product quantity.
     * Max 12 integer digits.
     */
    productQty?: number | null;
    /**
     * Product reference.
     * Max 64 characters.
     */
    productRef?: string | null;
    /**
     * Product type.
     */
    productType?: Types.Product.Category | null;
    /**
     * Product VAT.
     * Max 12 integer digits.
     */
    productVat?: number | null;
}
