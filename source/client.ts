/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as TestRequests from './tests/requests';
import * as TokenRequests from './tokens/requests';
import * as PaymentRequests from './payments/requests';
import * as TransactionRequests from './transactions/requests';
import * as SubscriptionRequests from './subscriptions/requests';
import * as OrderRequests from './orders/requests';

import * as Internals from './internals';

/**
 * Client driver class.
 */
@Injection.Describe({ singleton: true, name: 'client' })
@Class.Describe()
export class Client extends RestDB.Driver {
  /**
   * Last payload data.
   */
  @Class.Private()
  private payloadData?: RestDB.Entity;

  /**
   * Gets the request query string based on the specified entity model, fields and query filter.
   * @param model Entity model.
   * @param query Query filter.
   * @param fields Viewed fields.
   * @returns Returns the parsed query string.
   * @throws Throws an error when used with filters or viewed fields. (Feature not supported)
   */
  @Class.Protected()
  protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, fields?: string[]): string {
    if (query || (fields && fields.length > 0)) {
      throw new Error(`Query filter and Viewed field doesn't supported.`);
    }
    return '';
  }

  /**
   * Gets the result Id from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the result Id or undefined when the result Id was not found.
   * @throws Throws an error when the response body doesn't contains the insert results.
   */
  @Class.Protected()
  protected getInsertResponse(model: RestDB.Model, response: RestDB.Responses.Output): string | undefined {
    this.payloadData = void 0;
    if (response.status.code === 200) {
      if (!(response.payload instanceof Object)) {
        throw new Error(`The response body must be an object containing the response results.`);
      }
      this.payloadData = <RestDB.Entity>response.payload;
      if (this.payloadData.status !== 'SUCCESS') {
        const errorCode = this.payloadData.answer.detailedErrorCode || this.payloadData.answer.errorCode;
        const errorMessage = this.payloadData.answer.detailedErrorMessage || this.payloadData.answer.errorMessage;
        throw new Error(`Error: ${errorCode}: ${errorMessage}`);
      }
      switch (model) {
        case PaymentRequests.Create:
          return Internals.Parsers.Payment.getResponseId(this.payloadData.answer);
        case SubscriptionRequests.Get:
        case SubscriptionRequests.Create:
          return Internals.Parsers.Subscription.getResponseId(this.payloadData.answer);
        case TransactionRequests.Get:
        case TransactionRequests.Cancel:
        case TransactionRequests.Refund:
        case TransactionRequests.Rollback:
        case TransactionRequests.Validate:
        case TransactionRequests.Update:
        case TransactionRequests.Duplicate:
          return Internals.Parsers.Transaction.getResponseId(this.payloadData.answer);
        case OrderRequests.Get:
          return Internals.Parsers.Order.getResponseId(this.payloadData.answer);
        case TokenRequests.Get:
        case TokenRequests.Create:
        case TokenRequests.Transaction:
          return Internals.Parsers.Token.getResponseId(this.payloadData.answer);
        case TestRequests.Create:
          return Internals.Parsers.Test.getResponseValue(this.payloadData.answer);
        case SubscriptionRequests.Update:
        case SubscriptionRequests.Cancel:
        case TransactionRequests.Capture:
        case TokenRequests.Cancel:
        case TokenRequests.Reactivate:
          return Internals.Parsers.Common.getResponseCode(this.payloadData.answer);
        default:
          throw new Error(`Unsupported request entity.`);
      }
    }
    return void 0;
  }

  /**
   * Notify an error in the given response entity for all listeners.
   * @param model Entity model.
   * @param response Response entity.
   */
  @Class.Protected()
  protected async notifyErrorResponse(model: RestDB.Model, response: RestDB.Responses.Output): Promise<void> {
    this.payloadData = response.payload instanceof Object ? response.payload : void 0;
    await super.notifyErrorResponse(model, response);
  }

  /**
   * Default constructor:
   */
  constructor() {
    super();
    this.connect('https://api.payzen.com.br/api-payment/V4');
  }

  /**
   * Gets the payload from the last request.
   */
  @Class.Public()
  public get payload(): RestDB.Entity | undefined {
    return this.payloadData;
  }

  /**
   * Sets the username and password authorization for all subsequent requests.
   * @param username Username.
   * @param password Password.
   * @returns Returns the client instance.
   */
  @Class.Public()
  public setAuthorization(username: string, password: string): Client {
    return this.setHeader('Authorization', `Basic ${RestDB.Coder.toBase64(`${username}:${password}`)}`), this;
  }
}
