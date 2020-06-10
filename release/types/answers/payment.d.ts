/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Payment answer entity class.
 */
export declare class Payment extends Class.Null {
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
    orderStatus?: Types.Order.Status | null;
    /**
     * Order cycle.
     */
    orderCycle?: Types.Order.Cycle | null;
    /**
     * Order details.
     */
    orderDetails: Internals.Order;
    /**
     * Customer.
     */
    customer: Internals.Customer;
    /**
     * Transactions.
     */
    transactions: Internals.Transaction[];
}
