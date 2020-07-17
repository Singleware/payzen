/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
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
   * Get the last request payload.
   */
  @Class.Public()
  public get payload(): Entity | undefined {
    return this.lastPayload;
  }

  /**
   * Create a new subscription request.
   * @param request Subscription creation request.
   * @returns Returns a promise to get the subscription Id.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    this.lastPayload = void 0;
    const answer = (await this.mapper.insertEx<Requests.Create, { subscriptionId: string }>(Requests.Create, request))!;
    return answer.subscriptionId;
  }

  /**
   * Load the subscription that corresponds to the specified request.
   * @param request Subscription load request.
   * @returns Returns a promise to get the subscription entity or undefined when the subscription was not found.
   */
  @Class.Public()
  public async load(request: Requests.Get): Promise<Entity | undefined> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Get, Entity>(Requests.Get, request);
    if (answer !== void 0) {
      this.lastPayload = RestDB.Outputer.createFull(Entity, answer, []);
      return this.lastPayload;
    }
    return void 0;
  }

  /**
   * Update the subscription that corresponds to the specified request.
   * @param request Subscription update request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async modify(request: Requests.Update): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Update, { responseCode: number }>(Requests.Update, request);
    if (answer !== void 0) {
      return answer.responseCode === 0;
    }
    return false;
  }

  /**
   * Cancel the subscription that corresponds to the specified request.
   * @param request Subscription cancel request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async cancel(request: Requests.Cancel): Promise<boolean> {
    this.lastPayload = void 0;
    const answer = await this.mapper.insertEx<Requests.Cancel, { responseCode: number }>(Requests.Cancel, request);
    if (answer !== void 0) {
      return answer.responseCode === 0;
    }
    return false;
  }
}
