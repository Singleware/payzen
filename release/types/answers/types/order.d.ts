/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
/**
 * Order types.
 */
export declare namespace Order {
    /**
     * Order statuses.
     */
    enum Status {
        Paid = "PAID",
        Unpaid = "UNPAID",
        Running = "RUNNING",
        PartiallyPaid = "PARTIALLY_PAID"
    }
    /**
     * Order cycles.
     */
    enum Cycle {
        Open = "OPEN",
        Closed = "CLOSED"
    }
    /**
     * Order modes.
     */
    enum Mode {
        Test = "TEST",
        Production = "PRODUCTION"
    }
}
