/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Subscription mapper class.
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
     * Create a new subscription request.
     * @param request Subscription creation request.
     * @returns Returns a promise to get the subscription Id.
     * @throws Throws an error when the server response is invalid.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the subscription that corresponds to the specified request.
     * @param request Subscription load request.
     * @returns Returns a promise to get the subscription entity or undefined when the subscription was not found.
     */
    load(request: Requests.Get): Promise<Entity | undefined>;
    /**
     * Update the subscription that corresponds to the specified request.
     * @param request Subscription update request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    modify(request: Requests.Update): Promise<boolean>;
    /**
     * Cancel the subscription that corresponds to the specified request.
     * @param request Subscription cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    cancel(request: Requests.Cancel): Promise<boolean>;
}
