/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
/**
 * Transaction states.
 */
export declare enum State {
    Authorized = "AUTHORISED",
    Captured = "CAPTURED",
    AuthorizedToValidate = "AUTHORISED_TO_VALIDATE",
    PartiallyAuthorized = "PARTIALLY_AUTHORISED",
    Refused = "REFUSED",
    Error = "ERROR",
    Cancelled = "CANCELLED"
}
