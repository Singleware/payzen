/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Subscription entity class.
 */
@RestDB.Schema.Entity('subscription')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Subscription Id.
   * Max 64 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 64)
  @RestDB.Schema.Id()
  @Class.Public()
  public subscriptionId!: string;

  /**
   * Cancel date.
   */
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public cancelDate?: Date | null;

  /**
   * Effect date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public effectDate!: Date;

  /**
   * Description.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public description?: string | null;

  /**
   * Initial amount used for the first installment.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Integer(0, 999999999999)
  @RestDB.Schema.Null()
  @Class.Public()
  public initialAmount?: string | null;

  /**
   * Initial amount installment number.
   * Integer between 0 and 999 installments.
   */
  @RestDB.Schema.Integer(0, 999)
  @RestDB.Schema.Null()
  @Class.Public()
  public initialAmountNumber?: number | null;

  /**
   * Custom metadata for the subscription.
   */
  @RestDB.Schema.Object(Object)
  @RestDB.Schema.Null()
  @Class.Public()
  public metadata?: RestDB.Entity | null;

  /**
   * Subscription shop Id.
   * Use 8 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(8, 8)
  @Class.Public()
  public shopId!: string;

  /**
   * Subscription order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.String(0, 64)
  @RestDB.Schema.Null()
  @Class.Public()
  public orderId?: string | null;

  /**
   * Finalized payments.
   * Integer between 0 and 999999 digits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0, 999999)
  @Class.Public()
  public pastPaymentsNumber!: number;

  /**
   * Total payments.
   * Integer between 0 and 999999 digits.
   */
  @RestDB.Schema.Integer(0, 999999)
  @RestDB.Schema.Null()
  @Class.Public()
  public totalPaymentsNumber?: number | null;

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
}
