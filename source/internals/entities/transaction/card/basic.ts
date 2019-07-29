/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../../../types';

/**
 * Basic card options, entity class.
 */
@RestDB.Schema.Entity('Basic/Card/Options')
@Class.Describe()
export class Basic extends Class.Null {
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
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Source))
  @RestDB.Schema.Null()
  @Class.Public()
  public paymentSource?: Types.Payment.Source | null;

  /**
   * Number of attempts.
   * Integer between 0 and 9.
   */
  @RestDB.Schema.Integer(0, 9)
  @RestDB.Schema.Null()
  @Class.Public()
  public retry?: number | null;
}
