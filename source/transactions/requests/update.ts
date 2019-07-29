/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Internals from '../../internals';

/**
 * Update transaction, entity class.
 */
@RestDB.Schema.Entity('Transaction/Update')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Transaction Id.
   * Use 32 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(32, 32)
  @RestDB.Schema.Id()
  @Class.Public()
  public uuid!: string;

  /**
   * Updating comment.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public comment?: string | null;

  /**
   * Card payment update.
   */
  @RestDB.Schema.Object(Internals.Entities.Transaction.Update)
  @RestDB.Schema.Null()
  @Class.Public()
  public cardUpdate?: Internals.Entities.Transaction.Update | null;
}
