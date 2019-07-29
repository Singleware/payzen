/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Customer } from './customer';

// Imported aliases.
import * as Token from './token';
import * as Order from './order';
import * as Payment from './payment';
import * as Transaction from './transaction';
import * as Billing from './billing';
import * as Shipping from './shipping';
import * as Shopping from './shopping';

/**
 * Token namespace.
 */
export import Token = Token;

/**
 * Order namespace.
 */
export import Order = Order;

/**
 * Payment namespace.
 */
export import Payment = Payment;

/**
 * Transaction namespace.
 */
export import Transaction = Transaction;

/**
 * Billing namespace.
 */
export import Billing = Billing;

/**
 * Shipping namespace.
 */
export import Shipping = Shipping;

/**
 * Shopping namespace.
 */
export import Shopping = Shopping;
