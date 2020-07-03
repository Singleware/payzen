/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Payment parser class.
 */
@Class.Describe()
export class Payment extends Class.Null {
  /**
   * Gets the payment response Id.
   * @param answer Answer entity.
   * @returns Returns the payment response Id or undefined when the operation was failed.
   */
  @Class.Public()
  public static getResponseId<R>(answer: RestDB.Entity): R {
    if (answer.formToken !== void 0) {
      return answer.formToken;
    } else if (answer.transactions instanceof Array) {
      const transaction = answer.transactions[0];
      if (transaction === void 0 || transaction.uuid === void 0) {
        throw new Error(`Missing transaction entity.`);
      }
      return transaction.uuid;
    } else {
      throw new Error(`Unsupported payment response.`);
    }
  }
}
