
# Subscribe to Rate Plans Charge Override

## Structure

`SubscribeToRatePlansChargeOverride`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productRatePlanChargeId` | `string \| undefined` | Optional | This is unique rate plan charge id respective to rate plan id. It signifies the subscription type,entitlementLevel,maxEntitlements,numEntitlements etc.<br>**Constraints**: *Minimum Length*: `1` |
| `customerFacingCustomFields` | [`CustomerFacingCustomFields \| undefined`](../../doc/models/customer-facing-custom-fields.md) | Optional | - |
| `ratePlanPricing` | [`RatePlanPricing \| undefined`](../../doc/models/rate-plan-pricing.md) | Optional | - |
| `ratePlanEndDate` | [`RatePlanEndDate \| undefined`](../../doc/models/rate-plan-end-date.md) | Optional | - |

## Example (as JSON)

```json
{
  "productRatePlanChargeId": "productRatePlanChargeId0",
  "customerFacingCustomFields": {
    "customerFacing__c": "customerFacing__c0"
  },
  "ratePlanPricing": {
    "discount": {
      "discountAmount": 252.52,
      "discountPercentage": 13.42
    },
    "recurringFlatFee": {
      "listPrice": 233.52
    }
  },
  "ratePlanEndDate": {
    "endDateCondition": "Specific_End_Date",
    "specificEndDate": "2016-03-13T12:52:32.123Z",
    "upToPeriods": 187.74,
    "upToPeriodsType": "Billing_Periods"
  }
}
```

