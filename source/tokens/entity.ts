/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Payments from '../payments';

import * as Internals from './internals';

/**
 * Token entity class.
 */
@RestDB.Schema.Entity('token')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Card token.
   * Use 32 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(32, 32)
  @RestDB.Schema.Id()
  @Class.Public()
  public paymentMethodToken!: string;

  /**
   * Cancellation date.
   */
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public cancellationDate?: Date | null;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public creationDate!: Date;

  /**
   * Payment method type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(() => Object.values(Payments.Types.Method))
  @Class.Public()
  public paymentMethodType!: Payments.Types.Method;

  /**
   * Customer details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Customer)
  @Class.Public()
  public customer!: Internals.Customer;

  /**
   * Token details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Details)
  @Class.Public()
  public tokenDetails!: Internals.Details;
}
