/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Transaction types.
 */
export namespace Transaction {
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
  /**
   * Transaction string authentications.
   */
  export enum StrongAuthentication {
    Enabled = 'ENABLED',
    Disabled = 'DISABLED'
  }
  /**
   * Transaction operation.
   */
  export enum Operation {
    Debit = 'DEBIT',
    Credit = 'CREDIT',
    Verification = 'VERIFICATION'
  }
}