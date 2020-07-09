/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Transaction statuses.
 */
export enum Status {
  Paid = 'PAID',
  Unpaid = 'UNPAID',
  Running = 'RUNNING',
  PartiallyPaid = 'PARTIALLY_PAID'
}

/**
 * Transaction detailed statuses.
 */
export enum DetailedStatus {
  Authorized = 'AUTHORISED',
  Accepted = 'ACCEPTED',
  Captured = 'CAPTURED',
  AuthorizedToValidate = 'AUTHORISED_TO_VALIDATE',
  PartiallyAuthorized = 'PARTIALLY_AUTHORISED',
  Refused = 'REFUSED',
  Error = 'ERROR',
  Cancelled = 'CANCELLED'
}
