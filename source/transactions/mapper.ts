/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Types from './types';
import * as Requests from './requests';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Transaction mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'transaction' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Last response payload.
   */
  @Class.Private()
  private lastPayload?: Entity;

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
   * @param payload New payload transaction.
   * @param validate Determines whether or not the payload must be validated.
   * @returns Returns the new payload.
   * @throws Throws an error when the given payload is invalid.
   */
  @Class.Private()
  private updatePayload(payload: Entity | undefined, validate?: boolean): Entity | undefined {
    this.lastPayload = payload;
    if (validate && payload !== void 0 && payload.detailedStatus === Types.DetailedStatus.Error) {
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
  public get payload(): Entity | undefined {
    return this.lastPayload;
  }

  /**
   * Load the transaction that corresponds to the specified request.
   * @param request Transaction load request.
   * @returns Returns a promise to get the transaction entity or undefined when the transaction was not found.
   */
  @Class.Public()
  public async load(request: Requests.Get): Promise<Entity | undefined> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Get, Entity>(Requests.Get, request);
    if (answer !== void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, []);
      return this.updatePayload(entity);
    }
    return void 0;
  }

  /**
   * Update the transaction that corresponds to the specified request.
   * @param request Transaction update request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async modify(request: Requests.Update): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Update, Entity>(Requests.Update, request);
    if (answer !== void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, []);
      this.updatePayload(entity);
      return true;
    }
    return false;
  }

  /**
   * Capture all transactions that corresponds to the specified request.
   * @param request Transaction capture request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async capture(request: Requests.Capture): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Capture, { responseCode: number }>(Requests.Capture, request);
    if (answer !== void 0) {
      return answer.responseCode === 0;
    }
    return false;
  }

  /**
   * Validate the transaction that corresponds to the specified request.
   * @param request Transaction validate request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async validate(request: Requests.Validate): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Validate, Entity>(Requests.Validate, request);
    if (answer !== void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, []);
      this.updatePayload(entity);
      return true;
    }
    return false;
  }

  /**
   * Cancel the transaction that corresponds to the specified request.
   * @param request Transaction cancel request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async cancel(request: Requests.Cancel): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Rollback, Entity>(Requests.Rollback, {
      ...request,
      resolutionMode: Types.Resolution.CancellationOnly
    });
    if (answer !== void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, []);
      this.updatePayload(entity, true);
      return true;
    }
    return false;
  }

  /**
   * Refund the transaction that corresponds to the specified request.
   * @param request Transaction refund request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async refund(request: Requests.Refund): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Rollback, Entity>(Requests.Rollback, {
      ...request,
      resolutionMode: Types.Resolution.RefundOnly
    });
    if (answer !== void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, []);
      this.updatePayload(entity, true);
      return true;
    }
    return false;
  }

  /**
   * Cancel or Refund the transaction that corresponds to the specified request.
   * @param request Transaction rollback request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async rollback(request: Requests.Rollback): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Rollback, Entity>(Requests.Rollback, request);
    if (answer !== void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, []);
      this.updatePayload(entity, true);
      return true;
    }
    return false;
  }

  /**
   * Duplicate the transaction that corresponds to the specified request.
   * @param request Transaction duplicate request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async duplicate(request: Requests.Duplicate): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Duplicate, Entity>(Requests.Duplicate, request);
    if (answer !== void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, []);
      this.updatePayload(entity, true);
      return true;
    }
    return false;
  }
}
