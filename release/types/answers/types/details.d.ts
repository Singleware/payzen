/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
/**
 * Details types.
 */
export declare namespace Details {
    /**
     * Details contexts.
     */
    enum Context {
        Charge = "CHARGE",
        Refund = "REFUND",
        Verification = "VERIFICATION"
    }
    /**
     * Details liability.
     */
    enum Liability {
        No = "NO",
        Yes = "YES"
    }
}
