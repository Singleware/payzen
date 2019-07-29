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
 * Order test case.
 */
@Class.Describe()
export class Order extends Testing.Case {
  /**
   * Orders mapper.
   */
  @Injection.Inject(Payzen.Orders.Mapper)
  @Class.Private()
  private orders!: Payzen.Orders.Mapper;

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
    const orderId = `swe-order-${new Date().getTime()}-get`;
    // Create new payment transaction.
    this.areNotSame(await Helper.getNewPaymentId(orderId), void 0);
    // Test transaction loading by the order Id.
    const orderEntity = <Payzen.Orders.Entity>await this.orders.load({
      orderId: orderId
    });
    this.areNotSame(orderEntity, void 0);
    this.areSame(orderId, orderEntity.orderId);
  }
}
