/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Item } from './item';

/**
 * Shopping cart, entity class.
 */
@RestDB.Schema.Entity('Shopping/Cart')
@Class.Describe()
export class Cart extends Class.Null {
  /**
   * Insurance amount.
   * Max 12 characters.
   */
  @RestDB.Schema.String(0, 12)
  @RestDB.Schema.Null()
  @Class.Public()
  public insuranceAmount?: string | null;

  /**
   * Shipping amount.
   * Max 12 characters.
   */
  @RestDB.Schema.String(0, 12)
  @RestDB.Schema.Null()
  @Class.Public()
  public shippingAmount?: string | null;

  /**
   * Tax amount.
   * Max 12 characters.
   */
  @RestDB.Schema.String(0, 12)
  @RestDB.Schema.Null()
  @Class.Public()
  public taxAmount?: string | null;

  /**
   * Cart item list.
   */
  @RestDB.Schema.Array(Item)
  @RestDB.Schema.Null()
  @Class.Public()
  public cartItemInfo?: Item[] | null;
}
