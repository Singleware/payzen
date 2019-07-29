/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../../types';

/**
 * Transaction details, entity class.
 */
@RestDB.Schema.Entity('Transaction/Details')
@Class.Describe()
export class Details extends Class.Null {
  /**
   * Creation context.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.Context))
  @Class.Public()
  public creationContext!: Types.Transaction.Context;

  /**
   * Effective amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public effectiveAmount!: number;

  /**
   * Effective currency.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public effectiveCurrency!: Types.Currency;

  /**
   * Liability shift.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Transaction.Liability))
  @Class.Public()
  public liabilityShift!: Types.Transaction.Liability;

  /**
   * Parent transaction Id.
   * Use 32 characters.
   */
  @RestDB.Schema.String(32, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public parentTransactionUuid?: string | null;

  /**
   * Sequence number.
   * Max 6 integer digits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0, 999999)
  @Class.Public()
  public sequenceNumber!: number;

  /**
   * MId.
   * Max 128 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 128)
  @Class.Public()
  public mid!: string;
}
