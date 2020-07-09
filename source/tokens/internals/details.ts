/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Payments from '../../payments';

import * as Types from '../types';

import { Authorization } from './authorization';

/**
 * Token details, entity class.
 */
@RestDB.Schema.Entity('Token/Details')
@Class.Describe()
export class Details extends Class.Null {
  /**
   * Card country.
   * Use 2 characters.
   */
  @RestDB.Schema.String(2, 2)
  @RestDB.Schema.Null()
  @Class.Public()
  public country?: string | null;

  /**
   * Effective card brand.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Brand))
  @RestDB.Schema.Null()
  @Class.Public()
  public effectiveBrand?: Types.Brand | null;

  /**
   * Effective product code.
   * Max 3 characters.
   */
  @RestDB.Schema.String(0, 3)
  @RestDB.Schema.Null()
  @Class.Public()
  public effectiveProductCode?: string | null;

  /**
   * Expiration month.
   * Between 1 and 12 months.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(1, 12)
  @Class.Public()
  public expiryMonth!: number;

  /**
   * Expiration year.
   * Between 10 and 9999 years.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(10, 9999)
  @Class.Public()
  public expiryYear!: number;

  /**
   * Issuer code.
   * Integer between 0 and 99999 digits.
   */
  @RestDB.Schema.Integer(0, 99999)
  @RestDB.Schema.Null()
  @Class.Public()
  public issuerCode?: number | null;

  /**
   * Issuer name.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public issuerName?: string | null;

  /**
   * MId.
   * Max 128 characters.
   */
  @RestDB.Schema.String(0, 128)
  @RestDB.Schema.Null()
  @Class.Public()
  public mid?: string | null;

  /**
   * Primary Account Number.
   * Between 8 and 19 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(8, 19)
  @Class.Public()
  public pan!: string;

  /**
   * Payment source.
   */
  @RestDB.Schema.Enumeration(() => Object.values(Payments.Types.Source))
  @RestDB.Schema.Null()
  @Class.Public()
  public paymentSource?: Payments.Types.Source | null;

  /**
   * Authorization response.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Authorization)
  @Class.Public()
  public authorizationResponse!: Authorization;
}
