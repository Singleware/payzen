/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Shopping cart item, entity class.
 */
@RestDB.Schema.Entity('Shopping/Cart/Item')
@Class.Describe()
export class Item extends Class.Null {
  /**
   * Product amount.
   * Max 12 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 12)
  @Class.Public()
  public productAmount?: string | null;

  /**
   * Product label.
   * Max 255 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public productLabel?: string | null;

  /**
   * Product quantity.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public productQty?: number | null;

  /**
   * Product reference.
   * Max 64 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(0, 64)
  @Class.Public()
  public productRef?: string | null;

  /**
   * Product type.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Product.Category))
  @Class.Public()
  public productType?: Types.Product.Category | null;

  /**
   * Product VAT.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public productVat?: number | null;
}
