/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Transactions from '../../transactions';

import * as Types from '../types';
import * as Internals from '../internals';

/**
 * Create payment, entity class.
 */
@RestDB.Schema.Entity('Charge/CreatePayment')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public amount!: number;

  /**
   * Application name and version.
   * Max 128 characters.
   */
  @RestDB.Schema.String(0, 128)
  @Class.Public()
  public contrib?: string;

  /**
   * Amount currency.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(() => Object.values(Types.Currency))
  @Class.Public()
  public currency!: Types.Currency;

  /**
   * Determines which version of the formToken will be used.
   * Integer between 0 and 999.
   */
  @RestDB.Schema.Number(0, 999)
  @Class.Public()
  public formTokenVersion?: number;

  /**
   * Target URL for event notifications about the request.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public ipnTargetUrl?: string;

  /**
   * Request order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.String(0, 64)
  @Class.Public()
  public orderId?: string;

  /**
   * Custom metadata for the request.
   */
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public metadata?: RestDB.Entity;

  /**
   * Request finger print.
   * Required for ClearSale analyzer, 128 characters.
   */
  @RestDB.Schema.String(128, 128)
  @Class.Public()
  public fingerPrintId?: string;

  /**
   * Request action.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Action))
  @Class.Public()
  public formAction?: Types.Action;

  /**
   * Allow changes in the delivery mode.
   * Between 6 and 17 characters.
   */
  @RestDB.Schema.String(6, 17)
  @Class.Public()
  public overridePaymentCinematic?: string;

  /**
   * Pre-saved card token.
   * Max 32 characters.
   */
  @RestDB.Schema.String(1, 32)
  @Class.Public()
  public paymentMethodToken?: string;

  /**
   * Determines whether the request will use strong authentication or not.
   */
  @RestDB.Schema.Enumeration(() => Object.values(Transactions.Types.StrongAuthentication))
  @Class.Public()
  public strongAuthentication?: Transactions.Types.StrongAuthentication;

  /**
   * Custom data to the acquirer.
   */
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public acquirerTransientData?: RestDB.Entity;

  /**
   * Customer details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Customer)
  @Class.Public()
  public customer!: Internals.Customer;

  /**
   * Transaction options.
   */
  @RestDB.Schema.Object(() => Transactions.Internals.Options)
  @Class.Public()
  public transactionOptions?: Transactions.Internals.Options;

  /**
   * Payment forms.
   */
  @RestDB.Schema.Array(Internals.Form, [], true, 0, 1)
  @Class.Public()
  public paymentForms?: Internals.Form[];
}
