
# Order Error Type Error

## Structure

`OrderErrorTypeError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderNumber` | `string \| undefined` | Optional | Order Number. |
| `orderError` | [`OrderError \| undefined`](../../doc/models/order-error.md) | Optional | - |

## Example (as JSON)

```json
{
  "orderNumber": "S12345",
  "orderError": {
    "code": "code4",
    "message": "message6"
  }
}
```

