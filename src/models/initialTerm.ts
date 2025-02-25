/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { PeriodTypeEnum, periodTypeEnumSchema } from './periodTypeEnum';
import { TermTypeEnum, termTypeEnumSchema } from './termTypeEnum';

/** Information about the first term of the subscription. */
export interface InitialTerm {
  /** Start date of the first term, in yyyy-MM-dd'T'HH:mm:ss.SSSZ. */
  startDate?: string;
  /** End data of a subscription. in yyyy-MM-dd'T'HH:mm:ss.SSSZ. */
  endDate?: string;
  /** Duration of the first term in months, years, days, or weeks, depending on the value of the `periodType` field. Only applicable if the value of the `termType` field is `TERMED`. */
  period?: number;
  /** Unit of time that the renewal term is measured in. */
  periodType?: PeriodTypeEnum;
  /** Type of the first term. If the value of this field is `TERMED`, the first term has a predefined duration based on the value of the `period` field. If the value of this field is `EVERGREEN`, the first term does not have a predefined duration. */
  termType?: TermTypeEnum;
}

export const initialTermSchema: Schema<InitialTerm> = object({
  startDate: ['startDate', optional(string())],
  endDate: ['endDate', optional(string())],
  period: ['period', optional(number())],
  periodType: ['periodType', optional(periodTypeEnumSchema)],
  termType: ['termType', optional(termTypeEnumSchema)],
});
