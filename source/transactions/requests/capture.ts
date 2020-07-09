/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Capture transaction, entity class.
 */
@RestDB.Schema.Entity('Transaction/Capture')
@Class.Describe()
export class Capture extends Class.Null {
  /**
   * Transactions Id list.
   * Use 32 characters for each Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String, [], true)
  @Class.Public()
  public uuids!: string[];

  /**
   * Commission value.
   * Max 2 integer digits.
   */
  @RestDB.Schema.Integer(0, 99)
  @Class.Public()
  public commission?: number;

  /**
   * Expected capture date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public expectedCaptureDate?: Date;
}
