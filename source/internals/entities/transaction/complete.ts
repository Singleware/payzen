/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Card from './card';

/**
 * Complete transaction options, entity class.
 */
@RestDB.Schema.Entity('Complete/Transaction/Options')
@Class.Describe()
export class Complete extends Class.Null {
  /**
   * Card options.
   */
  @RestDB.Schema.Object(Card.Complete)
  @RestDB.Schema.Null()
  @Class.Public()
  public cardOptions?: Card.Complete | null;
}
