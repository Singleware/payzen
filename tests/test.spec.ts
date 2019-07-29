/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as Payzen from '../source';

import { Helper } from './helper';

/**
 * Test test case.
 */
@Class.Describe()
export class Test extends Testing.Case {
  /**
   * Tests mapper.
   */
  @Injection.Inject(Payzen.Tests.Mapper)
  @Class.Private()
  private tests!: Payzen.Tests.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create test.
   */
  @Testing.Method()
  @Class.Public()
  public async createTest(): Promise<void> {
    const input = 'My Test Value';
    const output = await this.tests.create({
      value: input
    });
    this.areSame(output, input);
  }
}
