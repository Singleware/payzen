/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../types';

/**
 * Transaction card duplicate, entity class.
 */
@RestDB.Schema.Entity('Transaction/Duplicate')
@Class.Describe()
export class Duplicate extends Class.Null {
  /**
   * Amount value.
   * Between 0 and 365 days.
   */
  @RestDB.Schema.Integer(0, 365)
  @RestDB.Schema.Null()
  @Class.Public()
  public captureDelay?: number | null;

  /**
   * Manual validation state.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.ManualValidation))
  @RestDB.Schema.Null()
  @Class.Public()
  public manualValidation?: Types.ManualValidation | null;
}
