/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  SubscribeToRatePlansChargeOverride,
  subscribeToRatePlansChargeOverrideSchema,
} from './subscribeToRatePlansChargeOverride';

export interface SubscribeToRatePlan {
  /** This is unique Product Rate Plan id which signifies the subscription type,entitlementLevel,maxEntitlements,numEntitlements etc. */
  productRatePlanId?: string;
  subscribeToRatePlansChargeOverrides?: SubscribeToRatePlansChargeOverride[];
}

export const subscribeToRatePlanSchema: Schema<SubscribeToRatePlan> = object({
  productRatePlanId: ['productRatePlanId', optional(string())],
  subscribeToRatePlansChargeOverrides: [
    'subscribeToRatePlansChargeOverrides',
    optional(array(lazy(() => subscribeToRatePlansChargeOverrideSchema))),
  ],
});
