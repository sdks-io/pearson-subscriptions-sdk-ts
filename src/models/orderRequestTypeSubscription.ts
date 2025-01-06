/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  CreateOrderOrderAction,
  createOrderOrderActionSchema,
} from './createOrderOrderAction';

export interface OrderRequestTypeSubscription {
  /** The actions to be applied to the subscription. Order actions will be stored with the sequence when it was provided in the request. */
  orderActions?: CreateOrderOrderAction[];
}

export const orderRequestTypeSubscriptionSchema: Schema<OrderRequestTypeSubscription> = object(
  {
    orderActions: [
      'orderActions',
      optional(array(lazy(() => createOrderOrderActionSchema))),
    ],
  }
);