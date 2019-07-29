/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../../../types';

import { Basic } from './basic';

/**
 * Complete card options, entity class.
 */
@RestDB.Schema.Entity('Complete/Card/Options')
@Class.Describe()
export class Complete extends Basic {
  /**
   * Number of days to delay the capture operation.
   * Integer between 0 and 365 days.
   */
  @RestDB.Schema.Integer(0, 365)
  @RestDB.Schema.Null()
  @Class.Public()
  public captureDelay?: number | null;

  /**
   * Number of months to delay the first installment for a installment payment.
   * Integer between 0 and 99 months.
   */
  @RestDB.Schema.Integer(0, 99)
  @RestDB.Schema.Null()
  @Class.Public()
  public firstInstallmentDelay?: number | null;

  /**
   * Manual validation state.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Validation.Manual))
  @RestDB.Schema.Null()
  @Class.Public()
  public manualValidation?: Types.Validation.Manual | null;
}
