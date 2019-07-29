import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Payment mapper class.
 */
export declare class Mapper extends RestDB.Mapper<Entity> {
    /**
     * Default constructor.
     * @param dependencies Mapper dependencies.
     */
    constructor(dependencies: any);
    /**
     * Creates a new payment request.
     * @param request Payment creation request.
     * @returns Returns a promise to get the payment Id or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<string | undefined>;
}
