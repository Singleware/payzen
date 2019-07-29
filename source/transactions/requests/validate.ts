/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Validate transaction, entity class.
 */
@RestDB.Schema.Entity('Transaction/Validate')
@Class.Describe()
export class Validate extends Class.Null {
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
   * Validation comment.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public comment?: string | null;
}
