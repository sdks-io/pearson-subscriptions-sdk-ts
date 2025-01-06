/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionSourceEnum
 */
export enum SubscriptionSourceEnum {
  Internal = 'Internal',
  EnumPcom = 'p.com',
}

/**
 * Schema for SubscriptionSourceEnum
 */
export const subscriptionSourceEnumSchema: Schema<SubscriptionSourceEnum> = stringEnum(
  SubscriptionSourceEnum
);
