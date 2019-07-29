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
 * Transaction test case.
 */
@Class.Describe()
export class Transaction extends Testing.Case {
  /**
   * Transaction mapper.
   */
  @Injection.Inject(Payzen.Transactions.Mapper)
  @Class.Private()
  private transactions!: Payzen.Transactions.Mapper;

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
    // Create new payment transaction.
    const uuid = await Helper.getNewPaymentId('swe-transaction-get');
    // Test payment loading.
    const entity = <Payzen.Transactions.Entity>await this.transactions.load({
      uuid: uuid
    });
    this.areNotSame(entity, void 0);
    this.areSame(uuid, entity.uuid);
  }

  /**
   * Update transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async updateTransactionSuccessful(): Promise<void> {
    // Create new payment transaction A.
    const uuid = await Helper.getNewPaymentId('swe-transaction-update');
    // Test payment updating.
    this.isTrue(
      await this.transactions.modify({
        uuid: uuid,
        comment: 'Transaction update',
        cardUpdate: {
          amount: 1500,
          currency: Payzen.Types.Currency.BRL
        }
      })
    );
  }

  /**
   * Capture transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async captureTransactionSuccessful(): Promise<void> {
    // Create new payment transaction A.
    const uuidA = await Helper.getNewPaymentId('swe-transaction-capture-a');
    // Create new payment transaction B.
    const uuidB = await Helper.getNewPaymentId('swe-transaction-capture-b');
    // Test payment capturing.
    this.isTrue(
      await this.transactions.capture({
        uuids: [uuidA, uuidB]
      })
    );
  }

  /**
   * Validate transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async validateTransactionSuccessful(): Promise<void> {
    // Create new payment transaction.
    const uuid = await Helper.getNewPaymentId('swe-transaction-validate');
    // Test payment validation.
    this.isTrue(
      await this.transactions.validate({
        uuid: uuid
      })
    );
  }

  /**
   * Rollback (Cancel or Refund) transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async rollbackTransactionSuccessful(): Promise<void> {
    // Create new payment transaction.
    const uuid = await Helper.getNewPaymentId('swe-transaction-cancel');
    // Test payment cancellation.
    this.isTrue(
      await this.transactions.rollback({
        uuid: uuid
      })
    );
  }

  /**
   * Duplicate transaction successful.
   */
  @Testing.Method()
  @Class.Public()
  public async duplicateTransactionSuccessful(): Promise<void> {
    // Create new payment transaction.
    const uuid = await Helper.getNewPaymentId('swe-transaction-duplicate');
    // Cancel the payment transaction.
    this.isTrue(
      await this.transactions.rollback({
        uuid: uuid
      })
    );
    // Test transaction duplication.
    this.isTrue(
      await this.transactions.duplicate({
        uuid: uuid,
        amount: 2500,
        currency: Payzen.Types.Currency.BRL,
        orderId: 'swe-transaction-duplicated'
      })
    );
  }
}
