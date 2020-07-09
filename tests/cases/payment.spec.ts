/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as PayZen from '../../source';

import { Helper } from '../helper';

/**
 * Payment test case.
 */
@Class.Describe()
export class Payment extends Testing.Case {
  /**
   * Payment mapper.
   */
  @Injection.Inject(PayZen.Payments.Mapper)
  @Class.Private()
  private payments!: PayZen.Payments.Mapper;

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
    const formToken = <string>await this.payments.create({
      amount: 1000,
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-payment-form',
      customer: Helper.getCustomerEntity()
    });
    this.isString(formToken);
    this.isUndefined(this.payments.payload);
  }

  /**
   * Create PCI payment successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciPaymentSuccessful(): Promise<void> {
    const id = await this.payments.create({
      amount: 1000,
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-pci-payment-successful',
      customer: Helper.getCustomerEntity(),
      paymentForms: [Helper.getPaymentSuccessEntity()]
    });
    this.isString(id);
    this.areNotSame(this.payments.payload, void 0);
  }

  /**
   * Create PCI payment failure.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciPaymentFailure(): Promise<void> {
    const id = await this.payments.create({
      amount: 1000,
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-pci-payment-failure',
      customer: Helper.getCustomerEntity(),
      paymentForms: [Helper.getPaymentFailureEntity()]
    });
    this.isString(id);
    this.areNotSame(this.payments.payload, void 0);
    this.areSame(this.payments.payload!.detailedStatus, PayZen.Transactions.Types.DetailedStatus.Refused);
  }
}
