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
 * Order test case.
 */
@Class.Describe()
export class Order extends Testing.Case {
  /**
   * Orders mapper.
   */
  @Injection.Inject(PayZen.Orders.Mapper)
  @Class.Private()
  private orders!: PayZen.Orders.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Get order successful.
   */
  @Testing.Method()
  @Class.Public()
  public async getOrderSuccessful(): Promise<void> {
    const orderId = `swe-order-${Date.now()}-get`;
    const paymentId = await Helper.getNewPaymentId(orderId);
    this.areNotSame(paymentId, void 0);
    const entity = await this.orders.load({
      orderId: orderId
    });
    this.areNotSame(entity, void 0);
    this.areNotSame(this.orders.payload, void 0);
    this.areSame(orderId, entity?.orderId);
  }
}
