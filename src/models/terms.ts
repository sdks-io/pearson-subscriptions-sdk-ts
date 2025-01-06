/**
 * pplus-subscription-papiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, lazy, object, optional, Schema } from '../schema';
import { InitialTerm, initialTermSchema } from './initialTerm';
import {
  RenewalSettingEnum,
  renewalSettingEnumSchema,
} from './renewalSettingEnum';
import { RenewalTerm, renewalTermSchema } from './renewalTerm';

/** Container for the terms and renewal settings of the subscription. */
export interface Terms {
  /** Information about the first term of the subscription. */
  initialTerm?: InitialTerm;
  /** List of renewal terms of the subscription. Only applicable if the type of the first term is `TERMED` and the value of the `renewalSetting` field is `RENEW_WITH_SPECIFIC_TERM`. */
  renewalTerms?: RenewalTerm[];
  /**
   * Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is `TERMED`.
   * * `RENEW_WITH_SPECIFIC_TERM` - Each renewal term has a predefined duration. The first entry in `renewalTerms` specifies the duration of the second term of the subscription, the second entry in `renewalTerms` specifies the duration of the third term of the subscription, and so on. The last entry in `renewalTerms` specifies the ultimate duration of each renewal term.
   * * `RENEW_TO_EVERGREEN` - The second term of the subscription does not have a predefined duration.
   */
  renewalSetting?: RenewalSettingEnum;
  /** Specifies whether the subscription automatically renews at the end of the each term. For REDEMPTION, default it to false. */
  autoRenew?: boolean;
}

export const termsSchema: Schema<Terms> = object({
  initialTerm: ['initialTerm', optional(lazy(() => initialTermSchema))],
  renewalTerms: [
    'renewalTerms',
    optional(array(lazy(() => renewalTermSchema))),
  ],
  renewalSetting: ['renewalSetting', optional(renewalSettingEnumSchema)],
  autoRenew: ['autoRenew', optional(boolean())],
});
