/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Card from './card';

/**
 * Basic transaction options, entity class.
 */
@RestDB.Schema.Entity('Basic/Transaction/Options')
@Class.Describe()
export class Basic extends Class.Null {
  /**
   * Card options.
   */
  @RestDB.Schema.Object(Card.Basic)
  @RestDB.Schema.Null()
  @Class.Public()
  public cardOptions?: Card.Basic | null;
}
