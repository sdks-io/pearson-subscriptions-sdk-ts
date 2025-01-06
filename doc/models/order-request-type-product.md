
# Order Request Type Product

## Structure

`OrderRequestTypeProduct`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isbn` | `string \| undefined` | Optional | product isbn value<br>**Constraints**: *Minimum Length*: `1` |
| `ppid` | `string \| undefined` | Optional | product ppid value<br>**Constraints**: *Minimum Length*: `1` |
| `duration` | `number \| undefined` | Optional | Duration of the entitlement in days for this product |
| `tax` | `number \| undefined` | Optional | Cost of tax on the product |
| `price` | `number \| undefined` | Optional | Cost of the product |

## Example (as JSON)

```json
{
  "isbn": "isbn2",
  "ppid": "ppid6",
  "duration": 32.56,
  "tax": 244.04,
  "price": 147.92
}
```

