/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

/**
 * Client driver class.
 */
@Injection.Describe({ singleton: true, name: 'client' })
@Class.Describe()
export class Client extends RestDB.Driver {
  /**
   * Last payload data.
   */
  @Class.Private()
  private lastPayload?: RestDB.Entity;

  /**
   * Get the insert result from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the insert result.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Protected()
  protected getInsertResponse<T>(model: RestDB.Model, response: RestDB.Responses.Output): T {
    this.lastPayload = response.payload;
    if (response.status.code !== 200) {
      throw new Error(`Unexpected insert(${response.input.method}) response status: ${response.status.code}`);
    } else if (!(this.lastPayload instanceof Object) || this.lastPayload.answer === void 0) {
      throw new Error(`Response payload must have the answer property.`);
    } else {
      const answer = this.lastPayload.answer;
      if (this.lastPayload.status !== 'SUCCESS') {
        if (answer.detailedErrorMessage) {
          throw new Error(`${answer.detailedErrorMessage} (code: ${answer.detailedErrorCode})`);
        } else if (answer.errorMessage) {
          throw new Error(`${answer.errorMessage} (code: ${answer.errorCode})`);
        } else {
          throw new Error(`Unexpected server error.`);
        }
      }
      return answer;
    }
  }

  /**
   * Get the request query string based on the specified entity model, filters and fields.
   * @param model Entity model.
   * @param query Query filter.
   * @param fields Fields to select.
   * @returns Returns the request query string.
   * @throws Throws an error when used with filters or selected fields. (Feature doesn't supported)
   */
  @Class.Protected()
  protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, fields?: string[]): string {
    if (query || (fields && fields.length > 0)) {
      throw new Error(`Query filter and Viewed field doesn't supported.`);
    }
    return '';
  }

  /**
   * Default constructor:
   */
  constructor() {
    super();
    this.connect('https://api.payzen.com.br/api-payment/V4');
  }

  /**
   * Get the last request payload.
   */
  @Class.Public()
  public get payload(): RestDB.Entity | undefined {
    return this.lastPayload;
  }

  /**
   * Set the username and password authorization for all subsequent requests.
   * @param username Username.
   * @param password Password.
   * @returns Returns the instance itself.
   */
  @Class.Public()
  public setAuthorization(username: string, password: string): Client {
    this.setAuthHeader('Authorization', `Basic ${RestDB.Coder.toBase64(`${username}:${password}`)}`);
    return this;
  }
}
