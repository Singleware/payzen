import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Order mapper class.
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
     * Load the order that corresponds to the specified request.
     * @param request Order load request.
     * @returns Returns a promise to get the order entity or undefined when the order was not found.
     */
    load(request: Requests.Get): Promise<Entity | undefined>;
}
