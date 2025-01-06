/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import {
  EndDateConditionEnum,
  endDateConditionEnumSchema,
} from './endDateConditionEnum';

export interface AddProductEndDate {
  /** enum values are "Subscription_End" "Fixed_Period" "Specific_End_Date" */
  endDateCondition?: EndDateConditionEnum;
  specificEndDate?: string;
  upToPeriods?: number;
  upToPeriodsType?: string;
}

export const addProductEndDateSchema: Schema<AddProductEndDate> = object({
  endDateCondition: ['endDateCondition', optional(endDateConditionEnumSchema)],
  specificEndDate: ['specificEndDate', optional(string())],
  upToPeriods: ['upToPeriods', optional(number())],
  upToPeriodsType: ['upToPeriodsType', optional(string())],
});