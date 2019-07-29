import * as Types from '../../../types';
import { Basic } from './basic';
/**
 * Complete payment form, entity class.
 */
export declare class Complete extends Basic {
    /**
     * Number of months to delay the first installment for a installment payment.
     * Integer between 0 and 99 months.
     */
    firstInstallmentDelay?: number;
    /**
     * Installment number.
     * Integer between 0 and 999 months.
     */
    installmentNumber?: number | null;
    /**
     * Allow changes in the delivery mode.
     * Between 6 and 17 characters.
     */
    overridePaymentCinematic?: string | null;
    /**
     * Pre-saved card token.
     * Max 32 characters.
     */
    paymentMethodToken?: string | null;
    /**
     * Determines whether the request will use strong authentication or not.
     */
    strongAuthentication?: Types.Authentication.Strong | null;
}
