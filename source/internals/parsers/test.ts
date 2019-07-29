/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Test parser class.
 */
@Class.Describe()
export class Test extends Class.Null {
  /**
   * Gets the test response value.
   * @param answer Answer entity.
   * @returns Returns the test response value or undefined when the test has been failed.
   */
  @Class.Public()
  public static getResponseValue(answer: RestDB.Entity): string | undefined {
    if (answer.value === void 0) {
      throw new Error(`Unsupported token response.`);
    }
    return answer.value;
  }
}
