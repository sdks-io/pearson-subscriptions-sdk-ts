/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Discount, discountSchema } from './discount';

export interface OverridesPricing {
  discount?: Discount;
}

export const overridesPricingSchema: Schema<OverridesPricing> = object({
  discount: ['discount', optional(lazy(() => discountSchema))],
});