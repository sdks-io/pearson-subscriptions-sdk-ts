/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface RecurringFlatFee {
  /** Only applicable for REDEMPTION to pass another price in addition to product price. */
  listPrice?: number;
}

export const recurringFlatFeeSchema: Schema<RecurringFlatFee> = object({
  listPrice: ['listPrice', optional(number())],
});
