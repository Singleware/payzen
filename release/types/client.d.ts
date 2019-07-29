import * as RestDB from '@singleware/restdb';
/**
 * Client driver class.
 */
export declare class Client extends RestDB.Driver {
    /**
     * Last payload data.
     */
    private payloadData?;
    /**
     * Gets the request query string based on the specified entity model, fields and query filter.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Viewed fields.
     * @returns Returns the parsed query string.
     * @throws Throws an error when used with filters or viewed fields. (Feature not supported)
     */
    protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, fields?: string[]): string;
    /**
     * Gets the result Id from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the result Id or undefined when the result Id was not found.
     * @throws Throws an error when the response body doesn't contains the insert results.
     */
    protected getInsertResponse(model: RestDB.Model, response: RestDB.Responses.Output): string | undefined;
    /**
     * Notify an error in the given response entity for all listeners.
     * @param model Entity model.
     * @param response Response entity.
     */
    protected notifyErrorResponse(model: RestDB.Model, response: RestDB.Responses.Output): Promise<void>;
    /**
     * Default constructor:
     */
    constructor();
    /**
     * Gets the payload from the last request.
     */
    get payload(): RestDB.Entity | undefined;
    /**
     * Sets the username and password authorization for all subsequent requests.
     * @param username Username.
     * @param password Password.
     * @returns Returns the client instance.
     */
    setAuthorization(username: string, password: string): Client;
}
