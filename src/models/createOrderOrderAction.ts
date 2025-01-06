/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  CreateSubscription,
  createSubscriptionSchema,
} from './createSubscription';
import { TriggerDate, triggerDateSchema } from './triggerDate';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface CreateOrderOrderAction {
  type?: TypeEnum;
  triggerDates?: TriggerDate[];
  /** Information about an order action of type `CreateSubscription`. */
  createSubscription?: CreateSubscription;
}

export const createOrderOrderActionSchema: Schema<CreateOrderOrderAction> = object(
  {
    type: ['type', optional(typeEnumSchema)],
    triggerDates: [
      'triggerDates',
      optional(array(lazy(() => triggerDateSchema))),
    ],
    createSubscription: [
      'createSubscription',
      optional(lazy(() => createSubscriptionSchema)),
    ],
  }
);
