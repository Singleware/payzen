/*!
 * Copyright (C) 2019-2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Payments from '../../payments';
import * as Transactions from '../../transactions';
/**
 * Card options, entity class.
 */
export declare class Options extends Class.Null {
    /**
     * MId.
     * Max 128 characters.
     */
    mid?: string | null;
    /**
     * Payment source.
     */
    paymentSource?: Payments.Types.Source | null;
    /**
     * Number of attempts.
     * Integer between 0 and 9.
     */
    retry?: number | null;
    /**
     * Number of days to delay the capture operation.
     * Integer between 0 and 365 days.
     */
    captureDelay?: number | null;
    /**
     * Number of months to delay the first installment for a installment payment.
     * Integer between 0 and 99 months.
     */
    firstInstallmentDelay?: number | null;
    /**
     * Manual validation state.
     */
    manualValidation?: Transactions.Types.ManualValidation | null;
}
