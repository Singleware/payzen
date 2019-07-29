import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Subscription mapper class.
 */
export declare class Mapper extends RestDB.Mapper<Entity> {
    /**
     * Client instance.
     */
    private client;
    /**
     * Default constructor.
     * @param dependencies Mapper dependencies.
     */
    constructor(dependencies: any);
    /**
     * Load the subscription that corresponds to the specified request.
     * @param request Subscription load request.
     * @returns Returns a promise to get the subscription entity or undefined when the subscription was not found.
     */
    load(request: Requests.Get): Promise<Entity | undefined>;
    /**
     * Creates a new subscription request.
     * @param request Subscription creation request.
     * @returns Returns a promise to get the subscription Id or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<string | undefined>;
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
