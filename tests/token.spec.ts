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
 * Token test case.
 */
@Class.Describe()
export class Token extends Testing.Case {
  /**
   * Tokens mapper.
   */
  @Injection.Inject(Payzen.Tokens.Mapper)
  @Class.Private()
  private tokens!: Payzen.Tokens.Mapper;

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
    const id = <string>await this.tokens.create({
      currency: Payzen.Types.Currency.BRL,
      orderId: 'swe-token-form',
      customer: Helper.getCustomerEntity()
    });
    this.isString(id);
    this.isGreaterThan(id.length, 32);
  }

  /**
   * Create PCI token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciTokenSuccessful(): Promise<void> {
    const id = <string>await this.tokens.create({
      currency: Payzen.Types.Currency.BRL,
      orderId: 'swe-pci-token-successful',
      customer: Helper.getCustomerEntity(),
      paymentForms: [
        {
          paymentMethodType: Payzen.Types.Payment.Method.Card,
          pan: '4970100000000055',
          expiryMonth: '01',
          expiryYear: '22',
          securityCode: '123'
        }
      ]
    });
    this.isString(id);
    this.areSame(id.length, 32);
  }

  /**
   * Create PCI token failure.
   */
  @Testing.Method()
  @Class.Public()
  public async createPciTokenFailure(): Promise<void> {
    this.isUndefined(
      await this.tokens.create({
        currency: Payzen.Types.Currency.BRL,
        orderId: 'swe-pci-token-failure',
        customer: Helper.getCustomerEntity(),
        paymentForms: [Helper.getPaymentFailureEntity()]
      })
    );
  }

  /**
   * Create token from transaction.
   */
  @Testing.Method()
  @Class.Public()
  public async createTokenFromTransaction(): Promise<void> {
    // Create new payment transaction.
    const uuid = await Helper.getNewPaymentId('swe-token-transaction');
    // Test token creation from transaction.
    const id = <string>await this.tokens.from({
      uuid: uuid
    });
    this.isString(id);
    this.areSame(id.length, 32);
  }

  /**
   * Get token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async getTokenSuccessful(): Promise<void> {
    // Create new token.
    const id = await Helper.getNewCardToken('swe-pci-token-get');
    // Test token loading.
    const entity = <Payzen.Tokens.Entity>await this.tokens.load({
      paymentMethodToken: id
    });
    this.areNotSame(entity, void 0);
    this.areSame(id, entity.paymentMethodToken);
  }

  /**
   * Cancel token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async cancelTokenSuccessful(): Promise<void> {
    // Create new token.
    const id = await Helper.getNewCardToken('swe-pci-token-cancel');
    // Test token cancellation.
    this.isTrue(
      await this.tokens.cancel({
        paymentMethodToken: id
      })
    );
  }

  /**
   * Reactivate token successful.
   */
  @Testing.Method()
  @Class.Public()
  public async reactivateTokenSuccessful(): Promise<void> {
    // Create new token.
    const id = await Helper.getNewCardToken('swe-pci-token-reactive');
    // Cancel the token.
    this.isTrue(
      await this.tokens.cancel({
        paymentMethodToken: id
      })
    );
    // Test token reactivation.
    this.isTrue(
      await this.tokens.reactivate({
        paymentMethodToken: id
      })
    );
  }
}
