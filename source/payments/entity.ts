/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Transactions from '../transactions';
import * as Order from '../orders';

import * as Internals from './internals';

/**
 * Payment entity class.
 */
@RestDB.Schema.Entity('payment')
@Class.Describe()
export class Entity extends Class.Null {
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
  @RestDB.Schema.Enumeration(() => Object.values(Order.Types.Status))
  @Class.Public()
  public orderStatus?: Order.Types.Status | null;

  /**
   * Order cycle.
   */
  @RestDB.Schema.Null()
  @RestDB.Schema.Enumeration(() => Object.values(Order.Types.Cycle))
  @Class.Public()
  public orderCycle?: Order.Types.Cycle | null;

  /**
   * Order details.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Order.Internals.Details)
  @Class.Public()
  public orderDetails!: Order.Internals.Details;

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
  @RestDB.Schema.Array(() => Transactions.Entity, Internals.LightTransactionFields)
  @Class.Public()
  public transactions!: Internals.LightTransaction[];
}
