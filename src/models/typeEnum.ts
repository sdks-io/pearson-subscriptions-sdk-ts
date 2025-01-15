/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TypeEnum
 */
export enum TypeEnum {
  CreateSubscription = 'CreateSubscription',
  AddProduct = 'AddProduct',
  RemoveProduct = 'RemoveProduct',
  RenewSubscription = 'RenewSubscription',
  TermsAndConditions = 'TermsAndConditions',
}

/**
 * Schema for TypeEnum
 */
export const typeEnumSchema: Schema<TypeEnum> = stringEnum(TypeEnum);
