/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../types';
/**
 * Generic details, entity class.
 */
export declare class Details extends Class.Null {
    /**
     * Address.
     * Max 255 characters.
     */
    address?: string | null;
    /**
     * Complementary address details.
     * Max 255 characters.
     */
    address2?: string | null;
    /**
     * Address street number.
     * Max 5 characters.
     */
    streetNumber?: string | null;
    /**
     * Address city.
     * Max 32 characters.
     */
    city?: string | null;
    /**
     * Address district.
     * Max 127 characters.
     */
    district?: string | null;
    /**
     * Address state.
     * Max 127 characters.
     */
    state?: string | null;
    /**
     * Address country code.
     * Alpha code with 2 characters.
     */
    country?: string | null;
    /**
     * Address zip code.
     * Max 64 characters.
     */
    zipCode?: string | null;
    /**
     * Category.
     */
    category?: Types.Customer.Category | null;
    /**
     * First name.
     * Max 63 characters.
     */
    firstName?: string | null;
    /**
     * Last name.
     * Max 63 characters.
     */
    lastName?: string | null;
    /**
     * Identity code.
     * Max 150 characters.
     */
    identityCode?: string | null;
    /**
     * Phone.
     * Max 32 characters.
     */
    phoneNumber?: string | null;
    /**
     * Cell phone.
     * Max 32 characters.
     */
    cellPhoneNumber?: string | null;
    /**
     * Language code.
     */
    language?: string | null;
}
