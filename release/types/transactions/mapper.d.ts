/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Transaction mapper class.
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
     * @param payload New payload transaction.
     * @param validate Determines whether or not the payload must be validated.
     * @returns Returns the new payload.
     * @throws Throws an error when the given payload is invalid.
     */
    private updatePayload;
    /**
     * Get the last request payload.
     */
    get payload(): Entity | undefined;
    /**
     * Load the transaction that corresponds to the specified request.
     * @param request Transaction load request.
     * @returns Returns a promise to get the transaction entity or undefined when the transaction was not found.
     */
    load(request: Requests.Get): Promise<Entity | undefined>;
    /**
     * Update the transaction that corresponds to the specified request.
     * @param request Transaction update request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    modify(request: Requests.Update): Promise<boolean>;
    /**
     * Capture all transactions that corresponds to the specified request.
     * @param request Transaction capture request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    capture(request: Requests.Capture): Promise<boolean>;
    /**
     * Validate the transaction that corresponds to the specified request.
     * @param request Transaction validate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    validate(request: Requests.Validate): Promise<boolean>;
    /**
     * Cancel the transaction that corresponds to the specified request.
     * @param request Transaction cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    cancel(request: Requests.Cancel): Promise<boolean>;
    /**
     * Refund the transaction that corresponds to the specified request.
     * @param request Transaction refund request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    refund(request: Requests.Refund): Promise<boolean>;
    /**
     * Cancel or Refund the transaction that corresponds to the specified request.
     * @param request Transaction rollback request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    rollback(request: Requests.Rollback): Promise<boolean>;
    /**
     * Duplicate the transaction that corresponds to the specified request.
     * @param request Transaction duplicate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    duplicate(request: Requests.Duplicate): Promise<boolean>;
}
