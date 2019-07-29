/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../../types';

/**
 * Order details, entity class.
 */
@RestDB.Schema.Entity('Order/Details')
@Class.Describe()
export class Details extends Class.Null {
  /**
   * Order mode.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Order.Mode))
  @Class.Public()
  public mode!: Types.Order.Mode;

  /**
   * Order currency.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public orderCurrency!: Types.Currency;

  /**
   * Effective order amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Integer(0, 999999999999)
  @RestDB.Schema.Null()
  @Class.Public()
  public orderEffectiveAmount?: number | null;

  /**
   * Order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.String(0, 64)
  @RestDB.Schema.Null()
  @Class.Public()
  public orderId?: string | null;

  /**
   * Order total amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public orderTotalAmount!: number;
}
