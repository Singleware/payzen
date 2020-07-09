/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Transaction details, entity class.
 */
@RestDB.Schema.Entity('Transaction/Details')
@Class.Describe()
export class Details extends Class.Null {
  /**
   * Creation context.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Context))
  @Class.Public()
  public creationContext?: Types.Context | null;

  /**
   * Effective amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public effectiveAmount?: number | null;

  /**
   * Effective currency.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public effectiveCurrency?: Types.Currency | null;

  /**
   * Liability shift.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Liability))
  @Class.Public()
  public liabilityShift?: Types.Liability | null;

  /**
   * Parent transaction Id.
   * Use 32 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(32, 32)
  @Class.Public()
  public parentTransactionUuid?: string | null;

  /**
   * Sequence number.
   * Max 6 integer digits.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Integer(0, 999999)
  @Class.Public()
  public sequenceNumber?: number | null;

  /**
   * MId.
   * Max 128 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 128)
  @Class.Public()
  public mid?: string | null;
}
