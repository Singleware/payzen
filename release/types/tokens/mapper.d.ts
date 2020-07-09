/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Transactions from '../transactions';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Token mapper class.
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
     * Update the current payload by a new one.
     * @param payload New payload payment.
     * @param validate Determines whether or not the payload must be validated.
     * @returns Returns the new payload.
     * @throws Throws an error when the given payload is invalid.
     */
    private updatePayload;
    /**
     * Get the last request payload.
     */
    get payload(): Entity | Transactions.Entity | undefined;
    /**
     * Create a new token request.
     * @param request Token creation request.
     * @returns Returns a promise to get the token Id.
     * @throws Throws an error when the server response is invalid.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Create a new token from a transaction request.
     * @param request Token transaction request.
     * @returns Returns a promise to get the token Id.
     * @throws Throws an error when the server response is invalid.
     */
    from(request: Requests.Transaction): Promise<string>;
    /**
     * Load the token that corresponds to the specified request.
     * @param request Token load request.
     * @returns Returns a promise to get the token entity or undefined when the token was not found.
     */
    load(request: Requests.Get): Promise<Entity | undefined>;
    /**
     * Cancel the token that corresponds to the specified request.
     * @param request Token cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    cancel(request: Requests.Cancel): Promise<boolean>;
    /**
     * Reactivate the token that corresponds to the specified request.
     * @param request Token reactivate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    reactivate(request: Requests.Reactivate): Promise<boolean>;
}
