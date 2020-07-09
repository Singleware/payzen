/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as PayZen from '../../source';

import { Helper } from '../helper';

/**
 * Test test case.
 */
@Class.Describe()
export class Test extends Testing.Case {
  /**
   * Tests mapper.
   */
  @Injection.Inject(PayZen.Tests.Mapper)
  @Class.Private()
  private tests!: PayZen.Tests.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Send a test request.
   */
  @Testing.Method()
  @Class.Public()
  public async sendTest(): Promise<void> {
    const status = await this.tests.send({
      value: 'My Test Value'
    });
    this.isTrue(status);
  }
}
