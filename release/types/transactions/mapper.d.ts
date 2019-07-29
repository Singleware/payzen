import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Transaction mapper class.
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
     * Duplicate the transaction that corresponds to the specified request.
     * @param request Transaction duplicate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    duplicate(request: Requests.Duplicate): Promise<boolean>;
    /**
     * Validate the transaction that corresponds to the specified request.
     * @param request Transaction validate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    validate(request: Requests.Validate): Promise<boolean>;
    /**
     * Cancel the transaction that corresponds to the specified request.
     * @param request Transaction cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    cancel(request: Requests.Cancel): Promise<boolean>;
    /**
     * Refund the transaction that corresponds to the specified request.
     * @param request Transaction refund request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    refund(request: Requests.Refund): Promise<boolean>;
    /**
     * Cancel or Refund the transaction that corresponds to the specified request.
     * @param request Transaction rollback request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    rollback(request: Requests.Rollback): Promise<boolean>;
}
