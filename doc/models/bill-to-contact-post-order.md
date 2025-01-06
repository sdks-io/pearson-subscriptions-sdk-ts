
# Bill to Contact Post Order

Contact details associated with an account.

## Structure

`BillToContactPostOrder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address1` | `string \| undefined` | Optional | First line of the contact's address. This is often a street address or a business name.<br>**Constraints**: *Maximum Length*: `255` |
| `address2` | `string \| undefined` | Optional | Second line of the contact's address.<br>**Constraints**: *Maximum Length*: `255` |
| `city` | `string \| undefined` | Optional | City of the contact's address.<br>**Constraints**: *Maximum Length*: `40` |
| `country` | `string \| undefined` | Optional | Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the bill-to contact to calculate tax.<br>**Constraints**: *Maximum Length*: `64` |
| `county` | `string \| undefined` | Optional | County of the contact's address.<br>**Constraints**: *Maximum Length*: `32` |
| `firstName` | `string \| undefined` | Optional | First name of the contact.<br>**Constraints**: *Maximum Length*: `100` |
| `lastName` | `string \| undefined` | Optional | Last name of the contact.<br>**Constraints**: *Maximum Length*: `100` |
| `mobilePhone` | `string \| undefined` | Optional | Mobile phone number of the contact.<br>**Constraints**: *Maximum Length*: `40` |
| `personalEmail` | `string \| undefined` | Optional | Personal email address of the contact.<br>**Constraints**: *Maximum Length*: `80` |
| `postalCode` | `string \| undefined` | Optional | ZIP code or other postal code of the contact's address.<br>**Constraints**: *Maximum Length*: `20` |
| `state` | `string \| undefined` | Optional | State or province of the contact's address.<br>**Constraints**: *Maximum Length*: `40` |
| `workEmail` | `string \| undefined` | Optional | Business email address of the contact.<br>**Constraints**: *Maximum Length*: `80` |
| `workPhone` | `string \| undefined` | Optional | Business phone number of the contact.<br>**Constraints**: *Maximum Length*: `40` |

## Example (as JSON)

```json
{
  "address1": "1051 E Hillsdale Blvd",
  "address2": "Santon street main",
  "city": "Durham",
  "country": "United States",
  "county": "Durham",
  "firstName": "Alex",
  "lastName": "Matthew",
  "mobilePhone": "1234567890",
  "personalEmail": "personal@email.com",
  "postalCode": "27703",
  "state": "NC",
  "workPhone": "1234567890"
}
```

