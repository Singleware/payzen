/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Brand } from './brand';
export { Currency } from './currency';

// Imported aliases.
import * as Order from './order';
import * as Product from './product';
import * as Shipping from './shipping';
import * as Transaction from './transaction';
import * as Authorization from './authorization';
import * as Authentication from './authentication';
import * as Validation from './validation';
import * as Customer from './customer';
import * as Payment from './payment';

/**
 * Order namespace.
 */
export import Order = Order;

/**
 * Product namespace.
 */
export import Product = Product;

/**
 * Shipping namespace.
 */
export import Shipping = Shipping;

/**
 * Transaction namespace.
 */
export import Transaction = Transaction;

/**
 * Authorization namespace.
 */
export import Authorization = Authorization;

/**
 * Authentication namespace.
 */
export import Authentication = Authentication;

/**
 * Validation namespace.
 */
export import Validation = Validation;

/**
 * Customer namespace.
 */
export import Customer = Customer;

/**
 * Payment namespace.
 */
export import Payment = Payment;
