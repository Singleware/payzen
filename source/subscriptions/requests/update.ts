/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../types';
import * as Internals from '../../internals';

/**
 * Update subscription, entity class.
 */
@RestDB.Schema.Entity('Subscription/Update')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Subscription Id.
   * Max 64 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1, 64)
  @RestDB.Schema.Id()
  @Class.Public()
  public subscriptionId!: string;

  /**
   * Amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public amount!: number;

  /**
   * Amount currency.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public currency!: Types.Currency;

  /**
   * Subscription description.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public description?: string;

  /**
   * Subscription effect date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public effectDate!: Date;

  /**
   * Initial amount used for the first installment.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public initialAmount?: number;

  /**
   * Initial amount installment number.
   * Integer between 0 and 999 digits.
   */
  @RestDB.Schema.Integer(0, 999)
  @Class.Public()
  public initialAmountNumber?: number;

  /**
   * Card token.
   * Use 32 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(32, 32)
  @Class.Public()
  public paymentMethodToken!: string;

  /**
   * Recurrence rule.
   * Max 255 characters.
   * @see https://www.nylas.com/blog/calendar-events-rrules/
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public rrule!: string;

  /**
   * Transaction options.
   */
  @RestDB.Schema.Object(Internals.Entities.Transaction.Complete)
  @Class.Public()
  public transactionOptions?: Internals.Entities.Transaction.Complete;
}
