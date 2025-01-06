
# Add Product End Date

## Structure

`AddProductEndDate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endDateCondition` | [`EndDateConditionEnum \| undefined`](../../doc/models/end-date-condition-enum.md) | Optional | enum values are "Subscription_End" "Fixed_Period" "Specific_End_Date" |
| `specificEndDate` | `string \| undefined` | Optional | - |
| `upToPeriods` | `number \| undefined` | Optional | - |
| `upToPeriodsType` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "endDateCondition": "Fixed_Period",
  "specificEndDate": "specificEndDate8",
  "upToPeriods": 47.48,
  "upToPeriodsType": "upToPeriodsType2"
}
```

