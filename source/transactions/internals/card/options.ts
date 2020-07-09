/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Payments from '../../../payments';
import * as Types from '../../types';

/**
 * Card options, entity class.
 */
@RestDB.Schema.Entity('Transaction/Options')
@Class.Describe()
export class Options extends Class.Null {
  /**
   * MId.
   * Max 128 characters.
   */
  @RestDB.Schema.String(0, 128)
  @RestDB.Schema.Null()
  @Class.Public()
  public mid?: string | null;

  /**
   * Payment source.
   */
  @RestDB.Schema.Enumeration(() => Object.values(Payments.Types.Source))
  @RestDB.Schema.Null()
  @Class.Public()
  public paymentSource?: Payments.Types.Source | null;

  /**
   * Number of attempts.
   * Integer between 0 and 9.
   */
  @RestDB.Schema.Integer(0, 9)
  @RestDB.Schema.Null()
  @Class.Public()
  public retry?: number | null;

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
  @RestDB.Schema.Enumeration(Object.values(Types.ManualValidation))
  @RestDB.Schema.Null()
  @Class.Public()
  public manualValidation?: Types.ManualValidation | null;
}
