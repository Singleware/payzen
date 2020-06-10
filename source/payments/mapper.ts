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
 * Payment mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'payment' })
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
   * Creates a new payment request.
   * @param request Payment creation request.
   * @returns Returns a promise to get the payment Id or undefined when the operation has been failed.
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
}
