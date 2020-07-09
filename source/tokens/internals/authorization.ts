/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Token authorization, entity class.
 */
@RestDB.Schema.Entity('Token/Details/Authorization')
@Class.Describe()
export class Authorization extends Class.Null {
  /**
   * Amount value.
   * Max 12 integer digits.
   */
  @RestDB.Schema.Integer(0, 999999999999)
  @RestDB.Schema.Null()
  @Class.Public()
  public amount?: number | null;

  /**
   * Amount currency.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Currency))
  @RestDB.Schema.Null()
  @Class.Public()
  public currency?: Types.Currency | null;

  /**
   * Authorization date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public authorizationDate!: Date;

  /**
   * Authorization mode.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Authorization))
  @RestDB.Schema.Null()
  @Class.Public()
  public authorizationMode?: Types.Authorization | null;

  /**
   * Authorization number.
   * Between 4 and 6 characters.
   */
  @RestDB.Schema.String(4, 6)
  @RestDB.Schema.Null()
  @Class.Public()
  public authorizationNumber?: string | null;

  /**
   * Authorization result.
   * Max 127 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public authorizationResult?: string | null;
}
