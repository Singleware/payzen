/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Billing from './billing';
import * as Shipping from './shipping';
import * as Shopping from './shopping';

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
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1, 150)
  @Class.Public()
  public email!: string;

  /**
   * Customer reference.
   * Max 63 characters.
   */
  @RestDB.Schema.String(0, 63)
  @RestDB.Schema.Null()
  @Class.Public()
  public reference?: string | null;

  /**
   * Billing details.
   */
  @RestDB.Schema.Object(Billing.Details)
  @RestDB.Schema.Null()
  @Class.Public()
  public billingDetails?: Billing.Details | null;

  /**
   * Shipping details.
   */
  @RestDB.Schema.Object(Shipping.Details)
  @RestDB.Schema.Null()
  @Class.Public()
  public shippingDetails?: Shipping.Details | null;

  /**
   * Shopping details.
   */
  @RestDB.Schema.Object(Shopping.Cart)
  @RestDB.Schema.Null()
  @Class.Public()
  public shoppingCart?: Shopping.Cart | null;
}
