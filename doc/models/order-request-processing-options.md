
# Order Request Processing Options

Invoice or Payment.

## Structure

`OrderRequestProcessingOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `runBilling` | `boolean \| undefined` | Optional | Indicates if the current request needs to generate an invoice. The invoice will be generated against all subscriptions included in this order. For REDEMPTION, default it to true. |
| `billingOptions` | [`BillingOptions \| undefined`](../../doc/models/billing-options.md) | Optional | - |
| `collectPayment` | `boolean \| undefined` | Optional | Indicates if the current request needs to collect payments. This value can not be 'true' when 'runBilling' flag is 'false'. |

## Example (as JSON)

```json
{
  "runBilling": false,
  "billingOptions": {
    "documentDate": "2016-03-13T12:52:32.123Z",
    "targetDate": "2016-03-13T12:52:32.123Z"
  },
  "collectPayment": false
}
```

