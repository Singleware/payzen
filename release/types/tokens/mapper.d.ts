import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Token mapper class.
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
     * Load the token that corresponds to the specified request.
     * @param request Token load request.
     * @returns Returns a promise to get the token entity or undefined when the token was not found.
     */
    load(request: Requests.Get): Promise<Entity | undefined>;
    /**
     * Creates a new token request.
     * @param request Token creation request.
     * @returns Returns a promise to get the token Id or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<string | undefined>;
    /**
     * Creates a new token from a transaction request.
     * @param request Token transaction request.
     * @returns Returns a promise to get the token Id or undefined when the operation has been failed.
     */
    from(request: Requests.Transaction): Promise<string | undefined>;
    /**
     * Cancel the token that corresponds to the specified request.
     * @param request Token cancel request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    cancel(request: Requests.Cancel): Promise<boolean>;
    /**
     * reactivate the token that corresponds to the specified request.
     * @param request Token reactivate request.
     * @returns Returns a promise to get true when operation was successful, false otherwise.
     */
    reactivate(request: Requests.Reactivate): Promise<boolean>;
}
