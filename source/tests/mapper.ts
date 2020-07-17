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
 * Test mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'test' })
@Class.Describe()
export class Mapper extends Class.Null {
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
   * Send a test request.
   * @param request Test creation request.
   * @returns Returns a promise to get true when the test response is valid, false otherwise.
   */
  @Class.Public()
  public async send(request: Requests.Send): Promise<boolean> {
    const answer = (await this.mapper.insertEx<Requests.Send, { value: string }>(Requests.Send, request))!;
    return answer.value === request.value;
  }
}
