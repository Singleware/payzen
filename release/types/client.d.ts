import * as RestDB from '@singleware/restdb';
/**
 * Client driver class.
 */
export declare class Client extends RestDB.Driver {
    /**
     * Last payload data.
     */
    private lastPayload?;
    /**
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insert result.
     * @throws Throws an error when the server response is invalid.
     */
    protected getInsertResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R | undefined;
    /**
     * Get the request query string based on the specified entity model, filters and fields.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Fields to select.
     * @returns Returns the request query string.
     * @throws Throws an error when used with filters or selected fields. (Feature doesn't supported)
     */
    protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, fields?: string[]): string;
    /**
     * Default constructor:
     */
    constructor();
    /**
     * Get the last request payload.
     */
    get payload(): RestDB.Entity | undefined;
    /**
     * Set the username and password authorization for all subsequent requests.
     * @param username Username.
     * @param password Password.
     * @returns Returns the instance itself.
     */
    setAuthorization(username: string, password: string): Client;
}
