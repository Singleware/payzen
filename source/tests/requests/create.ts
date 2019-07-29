/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Create test, entity class.
 */
@RestDB.Schema.Entity('Charge/SDKTest')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Test string.
   * Max 127 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 127)
  @Class.Public()
  public value!: string;
}
