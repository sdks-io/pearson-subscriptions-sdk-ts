/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { OrderRespError } from '../models/orderRespError';

/**
 * Creates an instance of OrderRespType
 */
interface OrderRespType {
  /** Order Number. */
  orderNumber?: string;
  /** Pearson subscription id. */
  subscriptionId?: string;
  orderRespError?: OrderRespError;
}

export class OrderRespTypeError extends ApiError<OrderRespType> {}
