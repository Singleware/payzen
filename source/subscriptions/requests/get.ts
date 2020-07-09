/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Get subscription, entity class.
 */
@RestDB.Schema.Entity('Subscription/Get')
@Class.Describe()
export class Get extends Class.Null {
  /**
   * Subscription Id.
   * Max 64 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1, 64)
  @RestDB.Schema.Id()
  @Class.Public()
  public subscriptionId!: string;

  /**
   * Card token.
   * Use 32 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(32, 32)
  @Class.Public()
  public paymentMethodToken!: string;
}
