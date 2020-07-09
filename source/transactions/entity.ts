/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Payments from '../payments';
import * as Order from '../orders';

import * as Types from './types';
import * as Internals from './internals';

/**
 * Transaction entity class.
 */
@RestDB.Schema.Entity('transaction')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Transaction Id.
   * Use 32 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(32, 32)
  @RestDB.Schema.Id()
  @Class.Public()
  public uuid!: string;

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
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public creationDate?: Date;

  /**
   * Status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Detailed status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.DetailedStatus))
  @Class.Public()
  public detailedStatus!: Types.DetailedStatus;

  /**
   * Order details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Order.Internals.Details)
  @Class.Public()
  public orderDetails!: Order.Internals.Details;

  /**
   * Customer details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Customer)
  @Class.Public()
  public customer!: Internals.Customer;

  /**
   * Error code.
   * Use 7 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public errorCode?: string | null;

  /**
   * Error message.
   * Max 127 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public errorMessage?: string | null;

  /**
   * Detailed error code.
   * Max 127 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public detailedErrorCode?: string | null;

  /**
   * Detailed error message.
   * Max 127 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public detailedErrorMessage?: string | null;

  /**
   * Effective strong authentication.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.StrongAuthentication))
  @Class.Public()
  public effectiveStrongAuthentication?: Types.StrongAuthentication;

  /**
   * Operation type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Operation))
  @Class.Public()
  public operationType!: Types.Operation;

  /**
   * Card token.
   * Use 32 characters.
   */
  @RestDB.Schema.String(32, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public paymentMethodToken?: string | null;

  /**
   * Payment method type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(() => Object.values(Payments.Types.Method))
  @Class.Public()
  public paymentMethodType!: Payments.Types.Method;

  /**
   * Shop Id.
   * Use 8 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(8, 8)
  @Class.Public()
  public shopId!: string;

  /**
   * Transaction details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Details)
  @Class.Public()
  public transactionDetails!: Internals.Details;
}
