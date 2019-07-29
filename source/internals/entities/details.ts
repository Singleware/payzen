/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../types';

/**
 * Generic details, entity class.
 */
@RestDB.Schema.Entity('Generic/Details')
@Class.Describe()
export class Details extends Class.Null {
  /**
   * Address.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public address?: string | null;

  /**
   * Complementary address details.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public address2?: string | null;

  /**
   * Address street number.
   * Max 5 characters.
   */
  @RestDB.Schema.String(0, 5)
  @RestDB.Schema.Null()
  @Class.Public()
  public streetNumber?: string | null;

  /**
   * Address city.
   * Max 32 characters.
   */
  @RestDB.Schema.String(0, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public city?: string | null;

  /**
   * Address district.
   * Max 127 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public district?: string | null;

  /**
   * Address state.
   * Max 127 characters.
   */
  @RestDB.Schema.String(0, 127)
  @RestDB.Schema.Null()
  @Class.Public()
  public state?: string | null;

  /**
   * Address country code.
   * Alpha code with 2 characters.
   */
  @RestDB.Schema.String(2, 2)
  @RestDB.Schema.Null()
  @Class.Public()
  public country?: string | null;

  /**
   * Address zip code.
   * Max 64 characters.
   */
  @RestDB.Schema.String(0, 64)
  @RestDB.Schema.Null()
  @Class.Public()
  public zipCode?: string | null;

  /**
   * Category.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Customer.Category))
  @RestDB.Schema.Null()
  @Class.Public()
  public category?: Types.Customer.Category | null;

  /**
   * First name.
   * Max 63 characters.
   */
  @RestDB.Schema.String(0, 63)
  @RestDB.Schema.Null()
  @Class.Public()
  public firstName?: string | null;

  /**
   * Last name.
   * Max 63 characters.
   */
  @RestDB.Schema.String(0, 63)
  @RestDB.Schema.Null()
  @Class.Public()
  public lastName?: string | null;

  /**
   * Identity code.
   * Max 150 characters.
   */
  @RestDB.Schema.String(0, 150)
  @RestDB.Schema.Null()
  @Class.Public()
  public identityCode?: string | null;

  /**
   * Phone.
   * Max 32 characters.
   */
  @RestDB.Schema.String(0, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public phoneNumber?: string | null;

  /**
   * Cell phone.
   * Max 32 characters.
   */
  @RestDB.Schema.String(0, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public cellPhoneNumber?: string | null;

  /**
   * Language code.
   */
  @RestDB.Schema.String(1, 8)
  @RestDB.Schema.Null()
  @Class.Public()
  public language?: string | null;
}
