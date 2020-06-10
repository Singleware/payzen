/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

import { Details } from './details';

/**
 * Transaction entity class.
 */
@RestDB.Schema.Entity('transaction')
@Class.Describe()
export class Transaction extends Class.Null {
  /**
   * Transaction Id.
   * Use 32 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(32, 32)
  @Class.Public()
  public uuid?: string | null;

  /**
   * Shop Id.
   * Use 8 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(8, 8)
  @Class.Public()
  public shopId?: string | null;

  /**
   * Amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public amount?: number | null;

  /**
   * Amount currency.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public currency?: Types.Currency | null;

  /**
   * Creation date.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Date()
  @Class.Public()
  public creationDate?: Date | null;

  /**
   * Status.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.Status))
  @Class.Public()
  public status?: Types.Transaction.Status | null;

  /**
   * Detailed status.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.DetailedStatus))
  @Class.Public()
  public detailedStatus?: Types.Transaction.DetailedStatus | null;

  /**
   * Error code.
   * Use 7 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 7)
  @Class.Public()
  public errorCode?: string | null;

  /**
   * Error message.
   * Max 127 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 127)
  @Class.Public()
  public errorMessage?: string | null;

  /**
   * Detailed error code.
   * Max 127 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 127)
  @Class.Public()
  public detailedErrorCode?: string | null;

  /**
   * Detailed error message.
   * Max 127 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 127)
  @Class.Public()
  public detailedErrorMessage?: string | null;

  /**
   * Effective strong authentication.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.StrongAuthentication))
  @Class.Public()
  public effectiveStrongAuthentication?: Types.Transaction.StrongAuthentication | null;

  /**
   * Operation type.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.Operation))
  @Class.Public()
  public operationType?: Types.Transaction.Operation | null;

  /**
   * Card token.
   * Use 32 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(32, 32)
  @Class.Public()
  public paymentMethodToken?: string | null;

  /**
   * Payment method type.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Method))
  @Class.Public()
  public paymentMethodType?: Types.Payment.Method | null;

  /**
   * Transaction metadata.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public metadata?: RestDB.Entity | null;

  /**
   * Transaction details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Details)
  @Class.Public()
  public transactionDetails!: Details;
}
