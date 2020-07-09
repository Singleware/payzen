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
 * Token test case.
 */
@Class.Describe()
export class Token extends Testing.Case {
  /**
   * Tokens mapper.
   */
  @Injection.Inject(PayZen.Tokens.Mapper)
  @Class.Private()
  private tokens!: PayZen.Tokens.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create token form.
   */
  @Testing.Method()
  @Class.Public()
  public async createTokenForm(): Promise<void> {
    const formToken = await this.tokens.create({
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-token-form',
      customer: Helper.getCustomerEntity()
    });
    this.isString(formToken);
    this.isUndefined(this.tokens.payload);
  }

  /**
   * Create PCI token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciTokenSuccessful(): Promise<void> {
    const id = await this.tokens.create({
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-pci-token-successful',
      customer: Helper.getCustomerEntity(),
      paymentForms: [Helper.getPaymentSuccessEntity()]
    });
    this.isString(id);
    this.areNotSame(this.tokens.payload, void 0);
  }

  /**
   * Create PCI token failure.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciTokenFailure(): Promise<void> {
    const id = await this.tokens.create({
      currency: PayZen.Types.Currency.BRL,
      orderId: 'swe-pci-token-failure',
      customer: Helper.getCustomerEntity(),
      paymentForms: [
        {
          ...Helper.getPaymentFailureEntity(),
          pan: '3782830000000041'
        }
      ]
    });
    this.isNull(id);
    this.areNotSame(this.tokens.payload, void 0);
    this.areSame((<PayZen.Transactions.Entity>this.tokens.payload).detailedStatus, PayZen.Transactions.Types.DetailedStatus.Refused);
  }

  /**
   * Create token from transaction.
   */
  @Testing.Method()
  @Class.Public()
  public async createTokenFromTransaction(): Promise<void> {
    const uuid = await Helper.getNewPaymentId('swe-token-transaction');
    const id = await this.tokens.from({
      uuid: uuid
    });
    this.isString(id);
    this.areNotSame(this.tokens.payload, void 0);
  }

  /**
   * Get token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async getTokenSuccessful(): Promise<void> {
    const id = await Helper.getNewCardToken('swe-pci-token-get');
    const entity = await this.tokens.load({
      paymentMethodToken: id
    });
    this.areNotSame(entity, void 0);
    this.areNotSame(this.tokens.payload, void 0);
    this.areSame(id, entity?.paymentMethodToken);
  }

  /**
   * Cancel token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async cancelTokenSuccessful(): Promise<void> {
    const id = await Helper.getNewCardToken('swe-pci-token-cancel');
    const status = await this.tokens.cancel({
      paymentMethodToken: id
    });
    this.isTrue(status);
    this.isUndefined(this.tokens.payload);
  }

  /**
   * Reactivate token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async reactivateTokenSuccessful(): Promise<void> {
    const id = await Helper.getNewCardToken('swe-pci-token-reactive');
    // Cancel
    const cancelStatus = await this.tokens.cancel({
      paymentMethodToken: id
    });
    this.isTrue(cancelStatus);
    this.isUndefined(this.tokens.payload);
    // Reactivation
    const reactivationStatus = await this.tokens.reactivate({
      paymentMethodToken: id
    });
    this.isTrue(reactivationStatus);
    this.isUndefined(this.tokens.payload);
  }
}
