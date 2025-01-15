/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Remove product details from the subscription plan */
export interface RemoveProduct {
  /** Internal identifier of the product rate plan that the rate plan is based on. */
  productRatePlanId?: string;
}

export const removeProductSchema: Schema<RemoveProduct> = object({
  productRatePlanId: ['productRatePlanId', optional(string())],
});
