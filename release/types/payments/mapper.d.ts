/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Internals from './internals';
import * as Requests from './requests';
/**
 * Payment mapper class.
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
    get payload(): Internals.LightTransaction | undefined;
    /**
     * Create a new payment request.
     * @param request Payment creation request.
     * @returns Returns a promise to get the payment Id or the payment form token.
     * @throws Throws an error when the server response is invalid.
     */
    create(request: Requests.Create): Promise<string>;
}
