/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../../types';

import { Basic } from './basic';

/**
 * Complete payment form, entity class.
 */
@RestDB.Schema.Entity('Complete/Payment/Form')
@Class.Describe()
export class Complete extends Basic {
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
  @RestDB.Schema.Enumeration(Object.values(Types.Authentication.Strong))
  @RestDB.Schema.Null()
  @Class.Public()
  public strongAuthentication?: Types.Authentication.Strong | null;
}
