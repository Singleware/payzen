import * as Types from '../../../types';
import { Details as GenericDetails } from '../details';
/**
 * Shipping details, entity class.
 */
export declare class Details extends GenericDetails {
    /**
     * Delivery company name.
     * Max 127 characters.
     */
    deliveryCompanyName?: string | null;
    /**
     * Legal company name.
     * Max 100 characters.
     */
    legalName?: string | null;
    /**
     * Shipping method.
     */
    shippingMethod?: Types.Shipping.Method | null;
    /**
     * Shipping speed.
     */
    shippingSpeed?: Types.Shipping.Speed | null;
}
