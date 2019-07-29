/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../types';

/**
 * Cancel or Refund transaction, entity class.
 */
@RestDB.Schema.Entity('Transaction/CancelOrRefund')
@Class.Describe()
export class Rollback extends Class.Null {
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
  @RestDB.Schema.Integer(0, 999999999999)
  @RestDB.Schema.Null()
  @Class.Public()
  public amount?: number | null;

  /**
   * Rollback resolution mode.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Resolution))
  @RestDB.Schema.Null()
  @Class.Public()
  public resolutionMode?: Types.Payment.Resolution | null;
}
