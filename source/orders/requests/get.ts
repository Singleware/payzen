/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Get order, entity class.
 */
@RestDB.Schema.Entity('Order/Get')
@Class.Describe()
export class Get extends Class.Null {
  /**
   * Order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 64)
  @RestDB.Schema.Id()
  @Class.Public()
  public orderId!: string;
}