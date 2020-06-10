/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Order details, entity class.
 */
export declare class Order extends Class.Null {
    /**
     * Order Id.
     * Max 64 characters.
     */
    orderId?: string | null;
    /**
     * Order mode.
     */
    mode?: Types.Order.Mode | null;
    /**
     * Order currency.
     */
    orderCurrency?: Types.Currency | null;
    /**
     * Effective order amount value.
     * Max 12 integer digits.
     */
    orderEffectiveAmount?: number | null;
    /**
     * Order total amount value.
     * Max 12 integer digits.
     */
    orderTotalAmount?: number | null;
}
