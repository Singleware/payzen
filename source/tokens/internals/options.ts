/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Card } from './card';

/**
 * Token transaction options, entity class.
 */
@RestDB.Schema.Entity('Token/Options')
@Class.Describe()
export class Options extends Class.Null {
  /**
   * Card options.
   */
  @RestDB.Schema.Object(Card)
  @RestDB.Schema.Null()
  @Class.Public()
  public cardOptions?: Card | null;
}
