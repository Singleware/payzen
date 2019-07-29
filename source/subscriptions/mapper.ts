/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Requests from './requests';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Subscription mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'subscription' })
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
   * Load the subscription that corresponds to the specified request.
   * @param request Subscription load request.
   * @returns Returns a promise to get the subscription entity or undefined when the subscription was not found.
   */
  @Class.Public()
  public async load(request: Requests.Get): Promise<Entity | undefined> {
    if ((await super.insertEx(Requests.Get, request)) !== void 0) {
      return RestDB.Outputer.createFull(Entity, (<RestDB.Entity>this.client.payload).answer, []);
    }
  }

  /**
   * Creates a new subscription request.
   * @param request Subscription creation request.
   * @returns Returns a promise to get the subscription Id or undefined when the operation has been failed.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string | undefined> {
    return await super.insertEx(Requests.Create, request);
  }

  /**
   * Update the subscription that corresponds to the specified request.
   * @param request Subscription update request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async modify(request: Requests.Update): Promise<boolean> {
    return (await super.insertEx(Requests.Update, request)) !== void 0;
  }

  /**
   * Cancel the subscription that corresponds to the specified request.
   * @param request Subscription cancel request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async cancel(request: Requests.Cancel): Promise<boolean> {
    return (await super.insertEx(Requests.Cancel, request)) !== void 0;
  }
}
