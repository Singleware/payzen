/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';

import * as PayZen from '../source';

/**
 * Helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(PayZen.Client)
  @Class.Private()
  private static client: PayZen.Client;

  /**
   * Sets the PayZen client authorization.
   */
  @Class.Public()
  public static setAuthorization(): void {
    this.client.setAuthorization('YOUR_USER', 'YOUR_SECRET');
  }

  /**
   * Get the test customer entity.
   * @returns Returns the test customer entity.
   */
  @Class.Public()
  public static getCustomerEntity(): PayZen.Internals.Customer {
    return {
      email: 'test@singleware.com.br',
      reference: 'swe-reference'
    };
  }

  /**
   * Get the success payment entity.
   * @returns Returns the successful test payment entity.
   */
  @Class.Public()
  public static getPaymentSuccessEntity(): PayZen.Payments.Internals.Form {
    return {
      paymentMethodType: PayZen.Payments.Types.Method.Card,
      pan: '4970100000000055',
      expiryMonth: '01',
      expiryYear: '22',
      securityCode: '123'
    };
  }

  /**
   * Get the failure payment entity.
   * @returns Returns the failure test payment entity.
   */
  @Class.Public()
  public static getPaymentFailureEntity(): PayZen.Payments.Internals.Form {
    return {
      paymentMethodType: PayZen.Payments.Types.Method.Card,
      pan: '4970200000000012',
      expiryMonth: '01',
      expiryYear: '22',
      securityCode: '123'
    };
  }

  /**
   * Get a new credit card token.
   * @param orderId Optional order Id.
   * @returns Returns a promise to get the new credit card token.
   */
  @Class.Public()
  public static async getNewCardToken(orderId?: string): Promise<string> {
    return Injection.resolve(PayZen.Tokens.Mapper).create({
      currency: PayZen.Types.Currency.BRL,
      orderId: orderId || 'swe-pci-token-helper',
      customer: this.getCustomerEntity(),
      paymentForms: [this.getPaymentSuccessEntity()]
    });
  }

  /**
   * Get a new payment Id.
   * @param orderId Optional order Id.
   * @returns Returns a promise to get the new payment Id.
   */
  @Class.Public()
  public static async getNewPaymentId(orderId?: string): Promise<string> {
    return Injection.resolve(PayZen.Payments.Mapper).create({
      amount: 2000,
      currency: PayZen.Types.Currency.BRL,
      orderId: orderId || 'swe-pci-payment-helper',
      customer: Helper.getCustomerEntity(),
      paymentForms: [this.getPaymentSuccessEntity()]
    });
  }

  /**
   * Get a new subscription Id.
   * @param token Credit card token.
   * @param orderId Optional order Id.
   * @returns Returns a promise to get the new subscription Id.
   */
  @Class.Public()
  public static async getNewSubscriptionId(token: string, orderId?: string): Promise<string> {
    return Injection.resolve(PayZen.Subscriptions.Mapper).create({
      amount: 2000,
      currency: PayZen.Types.Currency.BRL,
      orderId: orderId || 'swe-subscription-helper',
      effectDate: new Date(Date.now() + 86400000),
      paymentMethodToken: token,
      rrule: 'RRULE:FREQ=MONTHLY;BYMONTHDAY=1;'
    });
  }
}
