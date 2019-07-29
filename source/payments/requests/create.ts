/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../types';
import * as Internals from '../../internals';

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
  @RestDB.Schema.Null()
  @Class.Public()
  public contrib?: string | null;

  /**
   * Amount currency.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public currency!: Types.Currency;

  /**
   * Determines which version of the formToken will be used.
   * Integer between 0 and 999.
   */
  @RestDB.Schema.Number(0, 999)
  @RestDB.Schema.Null()
  @Class.Public()
  public formTokenVersion?: number | null;

  /**
   * Target URL for event notifications about the request.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public ipnTargetUrl?: string | null;

  /**
   * Request order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.String(0, 64)
  @RestDB.Schema.Null()
  @Class.Public()
  public orderId?: string | null;

  /**
   * Custom metadata for the request.
   */
  @RestDB.Schema.Object(Object)
  @RestDB.Schema.Null()
  @Class.Public()
  public metadata?: RestDB.Entity | null;

  /**
   * Request finger print.
   * Required for ClearSale analyzer, 128 characters.
   */
  @RestDB.Schema.String(128, 128)
  @RestDB.Schema.Null()
  @Class.Public()
  public fingerPrintId?: string | null;

  /**
   * Request action.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Action))
  @RestDB.Schema.Null()
  @Class.Public()
  public formAction?: Types.Payment.Action | null;

  /**
   * Allow changes in the delivery mode.
   * Between 6 and 17 characters.
   */
  @RestDB.Schema.String(6, 17)
  @RestDB.Schema.Null()
  @Class.Public()
  public overridePaymentCinematic?: string | null;

  /**
   * Pre-saved card token.
   * Max 32 characters.
   */
  @RestDB.Schema.String(1, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public paymentMethodToken?: string | null;

  /**
   * Determines whether the request will use strong authentication or not.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Authentication.Strong))
  @RestDB.Schema.Null()
  @Class.Public()
  public strongAuthentication?: Types.Authentication.Strong | null;

  /**
   * Custom data to the acquirer.
   */
  @RestDB.Schema.Object(Object)
  @RestDB.Schema.Null()
  @Class.Public()
  public acquirerTransientData?: RestDB.Entity | null;

  /**
   * Customer details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Entities.Customer)
  @Class.Public()
  public customer!: Internals.Entities.Customer;

  /**
   * Transaction options.
   */
  @RestDB.Schema.Object(Internals.Entities.Transaction.Complete)
  @RestDB.Schema.Null()
  @Class.Public()
  public transactionOptions?: Internals.Entities.Transaction.Complete | null;

  /**
   * Payment forms.
   */
  @RestDB.Schema.Array(Internals.Entities.Payment.Complete, [], true, 0, 1)
  @RestDB.Schema.Null()
  @Class.Public()
  public paymentForms?: Internals.Entities.Payment.Complete[] | null;
}
