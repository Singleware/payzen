/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Details types.
 */
export namespace Details {
  /**
   * Details contexts.
   */
  export enum Context {
    Charge = 'CHARGE',
    Refund = 'REFUND',
    Verification = 'VERIFICATION'
  }
  /**
   * Details liability.
   */
  export enum Liability {
    No = 'NO',
    Yes = 'YES'
  }
}
