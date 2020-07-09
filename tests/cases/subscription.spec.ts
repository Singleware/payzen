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
 * Subscription test case.
 */
@Class.Describe()
export class Subscription extends Testing.Case {
  /**
   * Subscriptions mapper.
   */
  @Injection.Inject(PayZen.Subscriptions.Mapper)
  @Class.Private()
  private subscriptions!: PayZen.Subscriptions.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create subscription successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createSubscriptionSuccessful(): Promise<void> {
    const token = await Helper.getNewCardToken('swe-subscription-successful');
    const id = await this.subscriptions.create({
      amount: 1000,
      initialAmount: 1000,
      initialAmountNumber: 1,
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-subscription-successful',
      effectDate: new Date(),
      paymentMethodToken: token,
      rrule: 'RRULE:FREQ=MONTHLY;BYMONTHDAY=1;COUNT=10'
    });
    this.isString(id);
    this.isUndefined(this.subscriptions.payload);
  }

  /**
   * Get subscription successful.
   */
  @Testing.Method()
  @Class.Public()
  public async getSubscriptionSuccessful(): Promise<void> {
    const token = await Helper.getNewCardToken('swe-subscription-get');
    const id = await Helper.getNewSubscriptionId(token, 'swe-subscription-get');
    const entity = <PayZen.Subscriptions.Entity>await this.subscriptions.load({
      paymentMethodToken: token,
      subscriptionId: id
    });
    this.areNotSame(entity, void 0);
    this.areNotSame(this.subscriptions.payload, void 0);
    this.areSame(id, entity.subscriptionId);
  }

  /**
   * Update subscription successful.
   * !WARNING! When updating subscriptions make sure the actual effect date is less than the current date.
   */
  @Testing.Method()
  @Class.Public()
  public async updateSubscriptionSuccessful(): Promise<void> {
    const token = await Helper.getNewCardToken('swe-subscription-update');
    const id = await Helper.getNewSubscriptionId(token, 'swe-subscription-update');
    const status = await this.subscriptions.modify({
      subscriptionId: id,
      amount: 500,
      initialAmount: 500,
      initialAmountNumber: 1,
      currency: PayZen.Types.Currency.BRL,
      effectDate: new Date(),
      paymentMethodToken: token,
      rrule: 'RRULE:FREQ=MONTHLY;BYMONTHDAY=1;COUNT=5'
    });
    this.isTrue(status);
    this.isUndefined(this.subscriptions.payload);
  }

  /**
   * Cancel subscription successful.
   */
  @Testing.Method()
  @Class.Public()
  public async cancelSubscriptionSuccessful(): Promise<void> {
    const token = await Helper.getNewCardToken('swe-subscription-cancel');
    const id = await Helper.getNewSubscriptionId(token, 'swe-subscription-cancel');
    const status = await this.subscriptions.cancel({
      paymentMethodToken: token,
      subscriptionId: id
    });
    this.isTrue(status);
    this.isUndefined(this.subscriptions.payload);
  }
}
