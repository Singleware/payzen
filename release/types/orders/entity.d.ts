/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Internals from '../internals';
/**
 * Order entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Order Id.
     * Max 64 characters.
     */
    orderId: string;
    /**
     * Shop Id.
     * Use 8 characters.
     */
    shopId: string;
    /**
     * Order transactions.
     */
    transactions: Internals.Entities.Order.Transaction[];
}
