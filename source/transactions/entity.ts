/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';
import * as Internals from '../internals';

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
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.Status))
  @Class.Public()
  public status!: Types.Transaction.Status;

  /**
   * Detailed status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.State))
  @Class.Public()
  public detailedStatus!: Types.Transaction.State;

  /**
   * Order details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Entities.Order.Details)
  @Class.Public()
  public orderDetails!: Internals.Entities.Order.Details;

  /**
   * Customer details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Entities.Customer)
  @Class.Public()
  public customer!: Internals.Entities.Customer;

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
  @RestDB.Schema.Enumeration(Object.values(Types.Authentication.Strong))
  @Class.Public()
  public effectiveStrongAuthentication?: Types.Authentication.Strong;

  /**
   * Operation type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.Mode))
  @Class.Public()
  public operationType!: Types.Transaction.Mode;

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
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Method))
  @Class.Public()
  public paymentMethodType!: Types.Payment.Method;

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
  @RestDB.Schema.Object(Internals.Entities.Transaction.Details)
  @Class.Public()
  public transactionDetails!: Internals.Entities.Transaction.Details;
}
