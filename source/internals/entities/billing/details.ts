/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Details as GenericDetails } from '../details';

/**
 * Billing details, entity class.
 */
@RestDB.Schema.Entity('Billing/Details')
@Class.Describe()
export class Details extends GenericDetails {}
