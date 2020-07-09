/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Billing } from './billing';
import { Shipping } from './shipping';
import { Cart } from './cart';
/**
 * Customer entity class.
 */
export declare class Customer extends Class.Null {
    /**
     * Customer email.
     * Max 150 characters.
     */
    email?: string | null;
    /**
     * Customer reference.
     * Max 63 characters.
     */
    reference?: string | null;
    /**
     * Billing details.
     */
    billingDetails?: Billing;
    /**
     * Shipping details.
     */
    shippingDetails?: Shipping;
    /**
     * Shopping details.
     */
    shoppingCart?: Cart;
}
