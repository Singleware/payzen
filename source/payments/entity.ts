/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Payment entity class.
 */
@RestDB.Schema.Entity('payment')
@Class.Describe()
export class Entity extends Class.Null {}
