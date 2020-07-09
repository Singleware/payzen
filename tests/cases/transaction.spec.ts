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
 * Transaction test case.
 */
@Class.Describe()
export class Transaction extends Testing.Case {
  /**
   * Transaction mapper.
   */
  @Injection.Inject(PayZen.Transactions.Mapper)
  @Class.Private()
  private transactions!: PayZen.Transactions.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Get transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async getTransactionSuccessful(): Promise<void> {
    const uuid = await Helper.getNewPaymentId('swe-transaction-get');
    const entity = await this.transactions.load({
      uuid: uuid
    });
    this.areNotSame(entity, void 0);
    this.areNotSame(this.transactions.payload, void 0);
    this.areSame(uuid, entity?.uuid);
  }

  /**
   * Update transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async updateTransactionSuccessful(): Promise<void> {
    const uuid = await Helper.getNewPaymentId('swe-transaction-update');
    const status = await this.transactions.modify({
      uuid: uuid,
      comment: 'Transaction update',
      cardUpdate: {
        amount: 1500,
        currency: PayZen.Types.Currency.BRL
      }
    });
    this.isTrue(status);
    this.areNotSame(this.transactions.payload, void 0);
  }

  /**
   * Capture transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async captureTransactionSuccessful(): Promise<void> {
    const uuidA = await Helper.getNewPaymentId('swe-transaction-capture-a');
    const uuidB = await Helper.getNewPaymentId('swe-transaction-capture-b');
    const status = await this.transactions.capture({
      uuids: [uuidA, uuidB]
    });
    this.isTrue(status);
    this.isUndefined(this.transactions.payload);
  }

  /**
   * Validate transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async validateTransactionSuccessful(): Promise<void> {
    const uuid = await Helper.getNewPaymentId('swe-transaction-validate');
    const status = await this.transactions.validate({
      uuid: uuid
    });
    this.isTrue(status);
    this.areNotSame(this.transactions.payload, void 0);
  }

  /**
   * Rollback (Cancel or Refund) transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async rollbackTransactionSuccessful(): Promise<void> {
    const uuid = await Helper.getNewPaymentId('swe-transaction-cancel');
    const status = await this.transactions.rollback({
      uuid: uuid
    });
    this.isTrue(status);
    this.areNotSame(this.transactions.payload, void 0);
  }

  /**
   * Duplicate transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async duplicateTransactionSuccessful(): Promise<void> {
    const uuid = await Helper.getNewPaymentId('swe-transaction-duplicate');
    const rollbackStatus = await this.transactions.rollback({
      uuid: uuid
    });
    this.isTrue(rollbackStatus);
    this.areNotSame(this.transactions.payload, void 0);
    const duplicationStatus = await this.transactions.duplicate({
      uuid: uuid,
      amount: 2500,
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-transaction-duplicated'
    });
    this.isTrue(duplicationStatus);
    this.areNotSame(this.transactions.payload, void 0);
  }
}
