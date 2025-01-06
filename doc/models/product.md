
# Product

## Structure

`Product`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isbn` | `string \| undefined` | Optional | product isbn number |
| `ppid` | `string \| undefined` | Optional | product ppid number |
| `duration` | `number \| undefined` | Optional | Duration of the entitlement in days for this product |
| `endDate` | `string \| undefined` | Optional | end date for the entitlement. in yyyy-MM-dd'T'HH:mm:ss.SSSZ format. |
| `tax` | `number \| undefined` | Optional | Cost of tax on the product |
| `price` | `number \| undefined` | Optional | Cost of the product |

## Example (as JSON)

```json
{
  "isbn": "isbn8",
  "ppid": "ppid0",
  "duration": 117.0,
  "endDate": "endDate6",
  "tax": 72.48
}
```

