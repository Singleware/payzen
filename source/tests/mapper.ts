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
 * Test mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'test' })
@Class.Describe()
export class Mapper extends RestDB.Mapper<Entity> {
  /**
   * Default constructor.
   * @param dependencies Mapper dependencies.
   */
  constructor(dependencies: any) {
    super(dependencies.client, Entity);
  }

  /**
   * Creates a new test request.
   * @param request Test creation request.
   * @returns Returns a promise to get the test value or undefined when the operation has been failed.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string | undefined> {
    return await super.insertEx(Requests.Create, request);
  }
}
