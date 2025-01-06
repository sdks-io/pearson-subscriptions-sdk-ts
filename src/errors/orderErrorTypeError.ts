/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { OrderError } from '../models/orderError';

/**
 * Creates an instance of OrderErrorType
 */
interface OrderErrorType {
  /** Order Number. */
  orderNumber?: string;
  orderError?: OrderError;
}

export class OrderErrorTypeError extends ApiError<OrderErrorType> {}