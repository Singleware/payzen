/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Testing from '@singleware/testing';

import { Test } from './cases/test.spec';
import { Token } from './cases/token.spec';
import { Payment } from './cases/payment.spec';
import { Subscription } from './cases/subscription.spec';
import { Transaction } from './cases/transaction.spec';
import { Order } from './cases/order.spec';

const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();

// Test cases.
suite.addCase(Test);
suite.addCase(Token);
suite.addCase(Payment);
suite.addCase(Subscription);
suite.addCase(Transaction);
suite.addCase(Order);

(async function () {
  const report = await suite.perform();
  logger.print(report);
  process.exitCode = report.errors > 0 ? 1 : 0;
})();
