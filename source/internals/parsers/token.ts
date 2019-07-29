/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Token parser class.
 */
@Class.Describe()
export class Token extends Class.Null {
  /**
   * Gets the token response Id.
   * @param answer Answer entity.
   * @returns Returns the token response Id or undefined when the operation was failed.
   */
  @Class.Public()
  public static getResponseId(answer: RestDB.Entity): string | undefined {
    if (answer.formToken !== void 0) {
      return answer.formToken;
    } else if (answer.paymentMethodToken !== void 0) {
      return answer.paymentMethodToken;
    } else if (answer.transactions instanceof Array) {
      const transaction = answer.transactions[0];
      if (transaction === void 0) {
        throw new Error(`Missing transaction entity.`);
      } else if (transaction.status === 'PAID' || transaction.status === 'RUNNING') {
        return transaction.paymentMethodToken;
      }
    } else {
      throw new Error(`Unsupported token response.`);
    }
  }
}
