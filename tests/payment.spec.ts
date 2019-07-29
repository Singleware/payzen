/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as Payzen from '../source';

import { Helper } from './helper';

/**
 * Payment test case.
 */
@Class.Describe()
export class Payment extends Testing.Case {
  /**
   * Payment mapper.
   */
  @Injection.Inject(Payzen.Payments.Mapper)
  @Class.Private()
  private payments!: Payzen.Payments.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create payment form.
   */
  @Testing.Method()
  @Class.Public()
  public async createPaymentForm(): Promise<void> {
    const paymentFormId = <string>await this.payments.create({
      amount: 1000,
      currency: Payzen.Types.Currency.BRL,
      orderId: 'swe-payment-form',
      customer: Helper.getCustomerEntity()
    });
    this.isString(paymentFormId);
    this.isGreaterThan(paymentFormId.length, 32);
  }

  /**
   * Create PCI payment successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciPaymentSuccessful(): Promise<void> {
    const paymentId = <string>await this.payments.create({
      amount: 1000,
      currency: Payzen.Types.Currency.BRL,
      orderId: 'swe-pci-payment-successful',
      customer: Helper.getCustomerEntity(),
      paymentForms: [Helper.getPaymentSuccessEntity()]
    });
    this.isString(paymentId);
    this.areSame(paymentId.length, 32);
  }

  /**
   * Create PCI payment failure.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciPaymentFailure(): Promise<void> {
    this.isUndefined(
      await this.payments.create({
        amount: 1000,
        currency: Payzen.Types.Currency.BRL,
        orderId: 'swe-pci-payment-failure',
        customer: Helper.getCustomerEntity(),
        paymentForms: [Helper.getPaymentFailureEntity()]
      })
    );
  }
}
