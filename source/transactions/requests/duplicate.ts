/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';
import * as Internals from '../internals';

/**
 * Duplicate transaction, entity class.
 */
@RestDB.Schema.Entity('Transaction/Duplicate')
@Class.Describe()
export class Duplicate extends Class.Null {
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
   * Amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0, 999999999999)
  @Class.Public()
  public amount!: number;

  /**
   * Amount currency.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @Class.Public()
  public currency!: Types.Currency;

  /**
   * Updating comment.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public comment?: string;

  /**
   * Request order Id.
   * Max 64 characters.
   */
  @RestDB.Schema.String(0, 64)
  @Class.Public()
  public orderId?: string;

  /**
   * Custom metadata for the request.
   */
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public metadata?: RestDB.Entity;

  /**
   * Card payment duplicate.
   */
  @RestDB.Schema.Object(Internals.Card.Duplicate)
  @Class.Public()
  public cardDuplicate?: Internals.Card.Duplicate;
}
