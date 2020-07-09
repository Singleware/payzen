/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Payments from '../../payments';

/**
 * Token transaction, card options, entity class.
 */
@RestDB.Schema.Entity('Token/Options/Card')
@Class.Describe()
export class Card extends Class.Null {
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
}
