/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../types';

/**
 * Transaction card update, entity class.
 */
@RestDB.Schema.Entity('Transaction/Update')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Integer(0, 999999999999)
  @RestDB.Schema.Null()
  @Class.Public()
  public amount?: number | null;

  /**
   * Amount currency.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @RestDB.Schema.Null()
  @Class.Public()
  public currency?: Types.Currency | null;

  /**
   * Expected capture date.
   */
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public expectedCaptureDate?: Date | null;

  /**
   * Manual validation state.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.ManualValidation))
  @RestDB.Schema.Null()
  @Class.Public()
  public manualValidation?: Types.ManualValidation | null;
}
