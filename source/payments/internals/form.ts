/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Transactions from '../../transactions';
import * as Types from '../types';

/**
 * Payment form, entity class.
 */
@RestDB.Schema.Entity('Payments/Form')
@Class.Describe()
export class Form extends Class.Null {
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
  @RestDB.Schema.Enumeration(Object.values(Types.Document))
  @RestDB.Schema.Null()
  @Class.Public()
  public identityDocumentType?: Types.Document | null;

  /**
   * Payment method type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Method))
  @Class.Public()
  public paymentMethodType!: Types.Method;

  /**
   * MId.
   * Max 128 characters.
   */
  @RestDB.Schema.String(0, 128)
  @RestDB.Schema.Null()
  @Class.Public()
  public mid?: string | null;

  /**
   * Number of months to delay the first installment for a installment payment.
   * Integer between 0 and 99 months.
   */
  @RestDB.Schema.Integer(0, 99)
  @Class.Public()
  public firstInstallmentDelay?: number;

  /**
   * Installment number.
   * Integer between 0 and 999 months.
   */
  @RestDB.Schema.Integer(0, 999)
  @RestDB.Schema.Null()
  @Class.Public()
  public installmentNumber?: number | null;

  /**
   * Allow changes in the delivery mode.
   * Between 6 and 17 characters.
   */
  @RestDB.Schema.String(6, 17)
  @RestDB.Schema.Null()
  @Class.Public()
  public overridePaymentCinematic?: string | null;

  /**
   * Pre-saved card token.
   * Max 32 characters.
   */
  @RestDB.Schema.String(1, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public paymentMethodToken?: string | null;

  /**
   * Determines whether the request will use strong authentication or not.
   */
  @RestDB.Schema.Enumeration(() => Object.values(Transactions.Types.StrongAuthentication))
  @RestDB.Schema.Null()
  @Class.Public()
  public strongAuthentication?: Transactions.Types.StrongAuthentication | null;
}
