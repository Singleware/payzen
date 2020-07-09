/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Order mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Last response payload.
     */
    private lastPayload?;
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the last request payload.
     */
    get payload(): Entity | undefined;
    /**
     * Load the order that corresponds to the specified request.
     * @param request Order load request.
     * @returns Returns a promise to get the order entity or undefined when the order was not found.
     */
    load(request: Requests.Get): Promise<Entity | undefined>;
}
