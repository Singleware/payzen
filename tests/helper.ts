/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';

import * as Payzen from '../source';

/**
 * Helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Payzen.Client)
  @Class.Private()
  private static client: Payzen.Client;

  /**
   * Sets the Payzen client authorization.
   */
  @Class.Public()
  public static setAuthorization(): void {
    this.client.setAuthorization('YOUR_USERNAME', 'YOUR_PASSWORD');
  }

  /**
   * Gets the test customer entity.
   * @returns Returns the test customer entity.
   */
  @Class.Public()
  public static getCustomerEntity(): Payzen.Internals.Entities.Customer {
    return {
      email: 'test@singleware.com.br',
      reference: 'swe-reference'
    };
  }

  /**
   * Gets the successful test payment entity.
   * @returns Returns the successful test payment entity.
   */
  @Class.Public()
  public static getPaymentSuccessEntity(): Payzen.Internals.Entities.Payment.Basic {
    return {
      paymentMethodType: Payzen.Types.Payment.Method.Card,
      pan: '4970100000000055',
      expiryMonth: '01',
      expiryYear: '22',
      securityCode: '123'
    };
  }

  /**
   * Gets the failure test payment entity.
   * @returns Returns the failure test payment entity.
   */
  @Class.Public()
  public static getPaymentFailureEntity(): Payzen.Internals.Entities.Payment.Basic {
    return {
      paymentMethodType: Payzen.Types.Payment.Method.Card,
      pan: '4970100000000113',
      expiryMonth: '01',
      expiryYear: '22',
      securityCode: '123'
    };
  }

  /**
   * Gets a new credit card token.
   * @param orderId Optional order Id.
   * @returns Returns a promise to get the new credit card token.
   */
  @Class.Public()
  public static async getNewCardToken(orderId?: string): Promise<string> {
    const cardId = await Injection.resolve(Payzen.Tokens.Mapper).create({
      currency: Payzen.Types.Currency.BRL,
      orderId: orderId || 'swe-pci-token-helper',
      customer: this.getCustomerEntity(),
      paymentForms: [this.getPaymentSuccessEntity()]
    });
    if (cardId === void 0 || this.client.payload!.errorCode !== void 0) {
      throw new Error(`Error: ${this.client.payload!.errorMessage}`);
    }
    return cardId;
  }

  /**
   * Gets a new payment Id.
   * @param orderId Optional order Id.
   * @returns Returns a promise to get the new payment Id.
   */
  @Class.Public()
  public static async getNewPaymentId(orderId?: string): Promise<string> {
    const paymentId = await Injection.resolve(Payzen.Payments.Mapper).create({
      amount: 2000,
      currency: Payzen.Types.Currency.BRL,
      orderId: orderId || 'swe-pci-payment-helper',
      customer: Helper.getCustomerEntity(),
      paymentForms: [this.getPaymentSuccessEntity()]
    });
    if (paymentId === void 0 || this.client.payload!.errorCode !== void 0) {
      throw new Error(`Error: ${this.client.payload!.errorMessage}`);
    }
    return paymentId;
  }

  /**
   * Gets a new subscription Id.
   * @param token Credit card token.
   * @param orderId Optional order Id.
   * @returns Returns a promise to get the new subscription Id.
   */
  @Class.Public()
  public static async getNewSubscriptionId(token: string, orderId?: string): Promise<string> {
    const subscriptionId = await Injection.resolve(Payzen.Subscriptions.Mapper).create({
      amount: 2000,
      currency: Payzen.Types.Currency.BRL,
      orderId: orderId || 'swe-subscription-helper',
      effectDate: new Date(new Date().getTime() + 86400000),
      paymentMethodToken: token,
      rrule: 'RRULE:FREQ=MONTHLY;BYMONTHDAY=1;',
      customer: Helper.getCustomerEntity()
    });
    if (subscriptionId === void 0 || this.client.payload!.errorCode !== void 0) {
      throw new Error(`Error: ${this.client.payload!.errorMessage}`);
    }
    return subscriptionId;
  }
}
