/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface Discount {
  /** Only applicable if the discount charge is a fixed-amount discount. */
  discountAmount?: number;
  /** Only applicable if the discount charge is a percentage discount */
  discountPercentage?: number;
}

export const discountSchema: Schema<Discount> = object({
  discountAmount: ['discountAmount', optional(number())],
  discountPercentage: ['discountPercentage', optional(number())],
});
