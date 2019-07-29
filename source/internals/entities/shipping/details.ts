/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../../types';

import { Details as GenericDetails } from '../details';

/**
 * Shipping details, entity class.
 */
@RestDB.Schema.Entity('Shipping/Details')
@Class.Describe()
export class Details extends GenericDetails {
  /**
   * Delivery company name.
   * Max 127 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public deliveryCompanyName?: string | null;

  /**
   * Legal company name.
   * Max 100 characters.
   */
  @RestDB.Schema.String(0, 100)
  @RestDB.Schema.Null()
  @Class.Public()
  public legalName?: string | null;

  /**
   * Shipping method.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Shipping.Method))
  @RestDB.Schema.Null()
  @Class.Public()
  public shippingMethod?: Types.Shipping.Method | null;

  /**
   * Shipping speed.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Shipping.Speed))
  @RestDB.Schema.Null()
  @Class.Public()
  public shippingSpeed?: Types.Shipping.Speed | null;
}
