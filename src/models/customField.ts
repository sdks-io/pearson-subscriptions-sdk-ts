/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CustomField {
  /** Custom field name defined for future use */
  name?: string;
  /** Custom field value for future use.  paymentMethod__c is Payment Gateway PayPal or CyberSource or REDEMPTION; paymentToken__c is PayPal or CyberSource token. */
  value?: string;
}

export const customFieldSchema: Schema<CustomField> = object({
  name: ['name', optional(string())],
  value: ['value', optional(string())],
});