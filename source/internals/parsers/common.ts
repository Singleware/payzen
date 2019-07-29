/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Common parser class.
 */
@Class.Describe()
export class Common extends Class.Null {
  /**
   * Gets the common response code.
   * @param answer Answer entity.
   * @returns Returns the string 'ok' when the response code indicates success, undefined otherwise.
   */
  @Class.Public()
  public static getResponseCode(answer: RestDB.Entity): string | undefined {
    if (answer.responseCode === void 0) {
      throw new Error(`Unsupported answer response.`);
    } else if (answer.responseCode === 0) {
      return 'ok';
    }
    return void 0;
  }
}
