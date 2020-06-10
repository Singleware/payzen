/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Billing } from './billing';
import { Shipping } from './shipping';
import { Cart } from './cart';

/**
 * Customer entity class.
 */
@RestDB.Schema.Entity('Customer')
@Class.Describe()
export class Customer extends Class.Null {
  /**
   * Customer email.
   * Max 150 characters.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(1, 150)
  @Class.Public()
  public email?: string | null;

  /**
   * Customer reference.
   * Max 63 characters.
   */
  @RestDB.Schema.String(0, 80)
  @RestDB.Schema.Null()
  @Class.Public()
  public reference?: string | null;

  /**
   * Billing details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Billing)
  @Class.Public()
  public billingDetails!: Billing;

  /**
   * Shipping details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Shipping)
  @Class.Public()
  public shippingDetails!: Shipping;

  /**
   * Shopping details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Cart)
  @Class.Public()
  public shoppingCart!: Cart;
}
