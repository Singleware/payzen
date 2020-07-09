/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Transactions from '../transactions';

/**
 * Order entity class.
 */
@RestDB.Schema.Entity('order')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 64)
  @RestDB.Schema.Id()
  @Class.Public()
  public orderId!: string;

  /**
   * Shop Id.
   * Use 8 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(8, 8)
  @Class.Public()
  public shopId!: string;

  /**
   * Order transactions.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(() => Transactions.Entity)
  @Class.Public()
  public transactions!: Transactions.Entity[];
}
