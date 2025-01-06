/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  SubscribeToRatePlan,
  subscribeToRatePlanSchema,
} from './subscribeToRatePlan';
import { Terms, termsSchema } from './terms';

/** Information about an order action of type `CreateSubscription`. */
export interface CreateSubscription {
  /** Container for the terms and renewal settings of the subscription. */
  terms?: Terms;
  subscribeToRatePlans?: SubscribeToRatePlan[];
}

export const createSubscriptionSchema: Schema<CreateSubscription> = object({
  terms: ['terms', optional(lazy(() => termsSchema))],
  subscribeToRatePlans: [
    'subscribeToRatePlans',
    optional(array(lazy(() => subscribeToRatePlanSchema))),
  ],
});