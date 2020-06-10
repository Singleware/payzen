/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Shipping types.
 */
export namespace Shipping {
  /**
   * Shipping methods.
   */
  export enum Method {
    Standard = 'STANDARD',
    Express = 'EXPRESS',
    Priority = 'PRIORITY'
  }
  /**
   * Shipping speeds.
   */
  export enum Speed {
    ReclaimInShop = 'RECLAIM_IN_SHOP',
    RelayPoint = 'RELAY_POINT',
    ReclaimInStation = 'RECLAIM_IN_STATION',
    PackageDeliveryCompany = 'PACKAGE_DELIVERY_COMPANY',
    ETicket = 'ETICKET'
  }
}
