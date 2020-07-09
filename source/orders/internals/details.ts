/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Order details, entity class.
 */
@RestDB.Schema.Entity('Order/Details')
@Class.Describe()
export class Details extends Class.Null {
  /**
   * Order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 64)
  @Class.Public()
  public orderId?: string | null;

  /**
   * Order mode.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Mode))
  @Class.Public()
  public mode?: Types.Mode | null;

  /**
   * Order currency.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public orderCurrency?: Types.Currency | null;

  /**
   * Effective order amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public orderEffectiveAmount?: number | null;

  /**
   * Order total amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public orderTotalAmount?: number | null;
}
