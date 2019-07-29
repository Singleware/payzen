import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Test mapper class.
 */
export declare class Mapper extends RestDB.Mapper<Entity> {
    /**
     * Default constructor.
     * @param dependencies Mapper dependencies.
     */
    constructor(dependencies: any);
    /**
     * Creates a new test request.
     * @param request Test creation request.
     * @returns Returns a promise to get the test value or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<string | undefined>;
}
