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
 * Order mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'order' })
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
   * Load the order that corresponds to the specified request.
   * @param request Order load request.
   * @returns Returns a promise to get the order entity or undefined when the order was not found.
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
}
