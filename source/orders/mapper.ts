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
 * Order mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'order' })
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
   * Load the order that corresponds to the specified request.
   * @param request Order load request.
   * @returns Returns a promise to get the order entity or undefined when the order was not found.
   */
  @Class.Public()
  public async load(request: Requests.Get): Promise<Entity | undefined> {
    if ((await super.insertEx(Requests.Get, request)) !== void 0) {
      return RestDB.Outputer.createFull(Entity, (<RestDB.Entity>this.client.payload).answer, []);
    }
  }
}
