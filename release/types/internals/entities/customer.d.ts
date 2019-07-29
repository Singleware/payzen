/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Billing from './billing';
import * as Shipping from './shipping';
import * as Shopping from './shopping';
/**
 * Customer entity class.
 */
export declare class Customer extends Class.Null {
    /**
     * Customer email.
     * Max 150 characters.
     */
    email: string;
    /**
     * Customer reference.
     * Max 63 characters.
     */
    reference?: string | null;
    /**
     * Billing details.
     */
    billingDetails?: Billing.Details | null;
    /**
     * Shipping details.
     */
    shippingDetails?: Shipping.Details | null;
    /**
     * Shopping details.
     */
    shoppingCart?: Shopping.Cart | null;
}
