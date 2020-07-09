/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Payments from '../../payments';

import * as Types from '../../types';
import * as Internals from '../internals';

/**
 * Create token, entity class.
 */
@RestDB.Schema.Entity('Charge/CreateToken')
@Class.Describe()
export class Create extends Class.Null {
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
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public currency!: Types.Currency;

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
   * Customer details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Customer)
  @Class.Public()
  public customer!: Internals.Customer;

  /**
   * Transaction options.
   */
  @RestDB.Schema.Object(Internals.Options)
  @Class.Public()
  public transactionOptions?: Internals.Options;

  /**
   * Payment forms.
   */
  @RestDB.Schema.Array(Payments.Internals.Form, [], true, 0, 1)
  @Class.Public()
  public paymentForms?: Payments.Internals.Form[];
}
