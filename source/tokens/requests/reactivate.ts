/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Reactivate token, entity class.
 */
@RestDB.Schema.Entity('Token/Reactivate')
@Class.Describe()
export class Reactivate extends Class.Null {
  /**
   * Card token.
   * Use 32 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(32, 32)
  @RestDB.Schema.Id()
  @Class.Public()
  public paymentMethodToken!: string;
}
