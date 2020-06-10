/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../../types';

/**
 * Basic payment form, entity class.
 */
@RestDB.Schema.Entity('Basic/Payment/Form')
@Class.Describe()
export class Basic extends Class.Null {
  /**
   * Primary Account Number.
   * Between 8 and 19 characters.
   */
  @RestDB.Schema.String(8, 19)
  @RestDB.Schema.Null()
  @Class.Public()
  public pan?: string;

  /**
   * Expiration month.
   * Use 2 character digits.
   */
  @RestDB.Schema.String(2, 2)
  @RestDB.Schema.Null()
  @Class.Public()
  public expiryMonth?: string;

  /**
   * Expiration year.
   * Use 2 character digits.
   */
  @RestDB.Schema.String(2, 2)
  @RestDB.Schema.Null()
  @Class.Public()
  public expiryYear?: string;

  /**
   * Security code.
   * Between 3 and 4 characters.
   */
  @RestDB.Schema.String(3, 4)
  @RestDB.Schema.Null()
  @Class.Public()
  public securityCode?: string | null;

  /**
   * Card brand.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Brand))
  @RestDB.Schema.Null()
  @Class.Public()
  public brand?: Types.Brand | null;

  /**
   * Card holder name.
   * Between 2 and 45 characters.
   */
  @RestDB.Schema.String(2, 45)
  @RestDB.Schema.Null()
  @Class.Public()
  public cardHolderName?: string | null;

  /**
   * Identity document number.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public identityDocumentNumber?: string | null;

  /**
   * Identity document type.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Document))
  @RestDB.Schema.Null()
  @Class.Public()
  public identityDocumentType?: Types.Payment.Document | null;

  /**
   * Payment method type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Payment.Method))
  @Class.Public()
  public paymentMethodType!: Types.Payment.Method;

  /**
   * MId.
   * Max 128 characters.
   */
  @RestDB.Schema.String(0, 128)
  @RestDB.Schema.Null()
  @Class.Public()
  public mid?: string | null;
}
