/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from './types';
import * as Internals from './internals';

/**
 * Payment answer entity class.
 */
@RestDB.Schema.Entity('payment')
@Class.Describe()
export class Payment extends Class.Null {
  /**
   * Shop Id.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.String(8, 8)
  @Class.Public()
  public shopId?: string | null;

  /**
   * Shop Id.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Date()
  @Class.Public()
  public serverDate?: Date | null;

  /**
   * Order status.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Order.Status))
  @Class.Public()
  public orderStatus?: Types.Order.Status | null;

  /**
   * Order cycle.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(Object.values(Types.Order.Cycle))
  @Class.Public()
  public orderCycle?: Types.Order.Cycle | null;

  /**
   * Order details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Order)
  @Class.Public()
  public orderDetails!: Internals.Order;

  /**
   * Customer.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Customer)
  @Class.Public()
  public customer!: Internals.Customer;

  /**
   * Transactions.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Transaction)
  @Class.Public()
  public transactions!: Internals.Transaction[];
}
