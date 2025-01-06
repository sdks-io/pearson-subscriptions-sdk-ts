
# Order Resp Type Error

## Structure

`OrderRespTypeError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderNumber` | `string \| undefined` | Optional | Order Number. |
| `subscriptionId` | `string \| undefined` | Optional | Pearson subscription id. |
| `orderRespError` | [`OrderRespError \| undefined`](../../doc/models/order-resp-error.md) | Optional | - |

## Example (as JSON)

```json
{
  "orderNumber": "S12345",
  "subscriptionId": "S12345",
  "orderRespError": {
    "code": "E40",
    "message": "message6"
  }
}
```

