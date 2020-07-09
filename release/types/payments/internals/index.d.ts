/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Customer } from '../../internals';
export { Form } from './form';
import * as Transactions from '../../transactions';
/**
 * Light signer type.
 */
export declare type LightTransaction = Omit<Transactions.Entity, 'orderDetails'>;
/**
 * Light transaction fields.
 */
export declare const LightTransactionFields: string[];
