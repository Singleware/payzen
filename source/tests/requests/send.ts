/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Send entity class.
 */
@RestDB.Schema.Entity('Charge/SDKTest')
@Class.Describe()
export class Send extends Class.Null {
  /**
   * Test string.
   * Max 127 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 127)
  @Class.Public()
  public value!: string;
}
