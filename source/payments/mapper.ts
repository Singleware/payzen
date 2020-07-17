/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Transactions from '../transactions';

import * as Internals from './internals';
import * as Requests from './requests';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Payment mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'payment' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Last response payload.
   */
  @Class.Private()
  private lastPayload?: Internals.LightTransaction;

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
  private updatePayload<T extends Internals.LightTransaction>(payload: T | undefined, validate?: boolean): T | undefined {
    this.lastPayload = payload;
    if (validate && payload !== void 0 && payload.detailedStatus === Transactions.Types.DetailedStatus.Error) {
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
  public get payload(): Internals.LightTransaction | undefined {
    return this.lastPayload;
  }

  /**
   * Create a new payment request.
   * @param request Payment creation request.
   * @returns Returns a promise to get the payment Id or the payment form token.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    this.lastPayload = void 0;
    const answer = (await this.mapper.insertEx<Requests.Create, { formToken?: string }>(Requests.Create, request))!;
    if (answer.formToken === void 0) {
      const entity = RestDB.Outputer.createFull(Entity, answer, [])!;
      return this.updatePayload(entity.transactions[0], true)?.uuid!;
    }
    return answer.formToken;
  }
}
