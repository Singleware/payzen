/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
/**
 * Test mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Send a test request.
     * @param request Test creation request.
     * @returns Returns a promise to get true when the test response is valid, false otherwise.
     */
    send(request: Requests.Send): Promise<boolean>;
}
