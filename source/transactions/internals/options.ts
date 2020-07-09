/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Card from './card';

/**
 * Transaction options, entity class.
 */
@RestDB.Schema.Entity('Transaction/Options')
@Class.Describe()
export class Options extends Class.Null {
  /**
   * Card options.
   */
  @RestDB.Schema.Object(Card.Options)
  @RestDB.Schema.Null()
  @Class.Public()
  public cardOptions?: Card.Options | null;
}
