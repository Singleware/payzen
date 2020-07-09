/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Order from '../orders';
import * as Internals from './internals';
/**
 * Payment entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Shop Id.
     */
    shopId?: string | null;
    /**
     * Shop Id.
     */
    serverDate?: Date | null;
    /**
     * Order status.
     */
    orderStatus?: Order.Types.Status | null;
    /**
     * Order cycle.
     */
    orderCycle?: Order.Types.Cycle | null;
    /**
     * Order details.
     */
    orderDetails: Order.Internals.Details;
    /**
     * Customer.
     */
    customer: Internals.Customer;
    /**
     * Transactions.
     */
    transactions: Internals.LightTransaction[];
}
