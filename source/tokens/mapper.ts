/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Answers from '../answers';

import * as Requests from './requests';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Token mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'token' })
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
   * Load the token that corresponds to the specified request.
   * @param request Token load request.
   * @returns Returns a promise to get the token entity or undefined when the token was not found.
   */
  @Class.Public()
  public async load(request: Requests.Get): Promise<Entity | undefined> {
    if ((await super.insertEx(Requests.Get, request)) !== void 0) {
      return RestDB.Outputer.createFull(Entity, (<RestDB.Entity>this.client.payload).answer, []);
    }
  }

  /**
   * Creates a new token request.
   * @param request Token creation request.
   * @returns Returns a promise to get the token Id or undefined when the operation has been failed.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    const id = await super.insertEx(Requests.Create, request);
    const answer = RestDB.Outputer.createFull(Answers.Payment, (<RestDB.Entity>this.client.payload).answer, [])!;
    if (answer.orderStatus === Answers.Types.Order.Status.Unpaid) {
      const transaction = answer.transactions[0];
      if (transaction.detailedErrorMessage) {
        throw new Error(`${transaction.detailedErrorMessage} (code: ${transaction.detailedErrorCode})`);
      } else if (transaction.errorMessage) {
        throw new Error(`${transaction.errorMessage} (code: ${transaction.errorCode})`);
      } else {
        throw new Error(`Unknown error.`);
      }
    }
    return id;
  }

  /**
   * Creates a new token from a transaction request.
   * @param request Token transaction request.
   * @returns Returns a promise to get the token Id or undefined when the operation has been failed.
   */
  @Class.Public()
  public async from(request: Requests.Transaction): Promise<string | undefined> {
    return await super.insertEx(Requests.Transaction, request);
  }

  /**
   * Cancel the token that corresponds to the specified request.
   * @param request Token cancel request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async cancel(request: Requests.Cancel): Promise<boolean> {
    return (await super.insertEx(Requests.Cancel, request)) !== void 0;
  }

  /**
   * Reactivate the token that corresponds to the specified request.
   * @param request Token reactivate request.
   * @returns Returns a promise to get true when operation was successful, false otherwise.
   */
  @Class.Public()
  public async reactivate(request: Requests.Reactivate): Promise<boolean> {
    return (await super.insertEx(Requests.Reactivate, request)) !== void 0;
  }
}
