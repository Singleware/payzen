/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';
import * as Requests from './requests';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Transaction mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'transaction' })
@Class.Describe()
export class Mapper extends RestDB.Mapper<Entity> {
  /**
   * Client instance.
   */
  @Class.Private()
  private client!: Client;

  /**
   * Default constructor.
   * @param dependencies Mapper dependencies.
   */
  constructor(dependencies: any) {
    super(dependencies.client, Entity);
    this.client = dependencies.client;
  }

  /**
   * Load the transaction that corresponds to the specified request.
   * @param request Transaction load request.
   * @returns Returns a promise to get the transaction entity or undefined when the transaction was not found.
   */
  @Class.Public()
  public async load(request: Requests.Get): Promise<Entity | undefined> {
    if ((await super.insertEx(Requests.Get, request)) !== void 0) {
      return RestDB.Outputer.createFull(Entity, (<RestDB.Entity>this.client.payload).answer, []);
    }
  }

  /**
   * Update the transaction that corresponds to the specified request.
   * @param request Transaction update request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async modify(request: Requests.Update): Promise<boolean> {
    return (await super.insertEx(Requests.Update, request)) !== void 0;
  }

  /**
   * Capture all transactions that corresponds to the specified request.
   * @param request Transaction capture request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async capture(request: Requests.Capture): Promise<boolean> {
    return (await super.insertEx(Requests.Capture, request)) !== void 0;
  }

  /**
   * Duplicate the transaction that corresponds to the specified request.
   * @param request Transaction duplicate request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async duplicate(request: Requests.Duplicate): Promise<boolean> {
    return (await super.insertEx(Requests.Duplicate, request)) !== void 0;
  }

  /**
   * Validate the transaction that corresponds to the specified request.
   * @param request Transaction validate request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async validate(request: Requests.Validate): Promise<boolean> {
    return (await super.insertEx(Requests.Validate, request)) !== void 0;
  }

  /**
   * Cancel the transaction that corresponds to the specified request.
   * @param request Transaction cancel request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async cancel(request: Requests.Cancel): Promise<boolean> {
    return (await super.insertEx(Requests.Rollback, { ...request, resolutionMode: Types.Payment.Resolution.CancellationOnly })) !== void 0;
  }

  /**
   * Refund the transaction that corresponds to the specified request.
   * @param request Transaction refund request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async refund(request: Requests.Refund): Promise<boolean> {
    return (await super.insertEx(Requests.Rollback, { ...request, resolutionMode: Types.Payment.Resolution.RefundOnly })) !== void 0;
  }

  /**
   * Cancel or Refund the transaction that corresponds to the specified request.
   * @param request Transaction rollback request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async rollback(request: Requests.Rollback): Promise<boolean> {
    return (await super.insertEx(Requests.Rollback, request)) !== void 0;
  }
}
