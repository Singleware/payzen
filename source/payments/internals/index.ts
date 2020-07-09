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
export type LightTransaction = Omit<Transactions.Entity, 'orderDetails'>;

/**
 * Light transaction fields.
 */
export const LightTransactionFields = [
  'uuid',
  'amount',
  'currency',
  'creationDate',
  'status',
  'detailedStatus',
  'customer',
  'errorCode',
  'errorMessage',
  'detailedErrorCode',
  'detailedErrorMessage',
  'effectiveStrongAuthentication',
  'operationType',
  'paymentMethodToken',
  'paymentMethodType',
  'shopId',
  'transactionDetails'
];
