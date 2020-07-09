/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Payments from '../payments';
import * as Transactions from '../transactions';

import * as Requests from './requests';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Token mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'token' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Last response payload.
   */
  @Class.Private()
  private lastPayload?: Entity | Transactions.Entity;

  /**
   * Client instance.
   */
  @Injection.Inject(() => Client)
  @Class.Private()
  private client!: Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Update the current payload by a new one.
   * @param payload New payload payment.
   * @param validate Determines whether or not the payload must be validated.
   * @returns Returns the new payload.
   * @throws Throws an error when the given payload is invalid.
   */
  @Class.Private()
  private updatePayload<T extends Entity | Transactions.Entity>(payload: T | undefined, validate?: boolean): T | undefined {
    this.lastPayload = payload;
    if (validate && payload instanceof Transactions.Entity && payload.detailedStatus === Transactions.Types.DetailedStatus.Error) {
      if (payload.detailedErrorMessage) {
        throw new Error(`${payload.detailedErrorMessage} (code: ${payload.detailedErrorCode})`);
      } else if (payload.errorMessage) {
        throw new Error(`${payload.errorMessage} (code: ${payload.errorCode})`);
      } else {
        throw new Error(`Unexpected transaction error.`);
      }
    }
    return payload;
  }

  /**
   * Get the last request payload.
   */
  @Class.Public()
  public get payload(): Entity | Transactions.Entity | undefined {
    return this.lastPayload;
  }

  /**
   * Create a new token request.
   * @param request Token creation request.
   * @returns Returns a promise to get the token Id.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx(Requests.Create, request);
    if (answer.formToken === void 0) {
      const entity = RestDB.Outputer.createFull(Payments.Entity, answer, [])!;
      return this.updatePayload(<any>entity.transactions[0], true)?.paymentMethodToken!;
    }
    return answer.formToken;
  }

  /**
   * Create a new token from a transaction request.
   * @param request Token transaction request.
   * @returns Returns a promise to get the token Id.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async from(request: Requests.Transaction): Promise<string> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx(Requests.Transaction, request);
    const entity = RestDB.Outputer.createFull(Entity, answer, [])!;
    return this.updatePayload(entity, true)?.paymentMethodToken!;
  }

  /**
   * Load the token that corresponds to the specified request.
   * @param request Token load request.
   * @returns Returns a promise to get the token entity or undefined when the token was not found.
   */
  @Class.Public()
  public async load(request: Requests.Get): Promise<Entity | undefined> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx(Requests.Get, request);
    const entity = RestDB.Outputer.createFull(Entity, answer, []);
    return this.updatePayload(entity);
  }

  /**
   * Cancel the token that corresponds to the specified request.
   * @param request Token cancel request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async cancel(request: Requests.Cancel): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx(Requests.Cancel, request);
    return answer.responseCode === 0;
  }

  /**
   * Reactivate the token that corresponds to the specified request.
   * @param request Token reactivate request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async reactivate(request: Requests.Reactivate): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx(Requests.Reactivate, request);
    return answer.responseCode === 0;
  }
}
