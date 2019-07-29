import * as Types from '../../../../types';
import { Basic } from './basic';
/**
 * Complete card options, entity class.
 */
export declare class Complete extends Basic {
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
    manualValidation?: Types.Validation.Manual | null;
}
