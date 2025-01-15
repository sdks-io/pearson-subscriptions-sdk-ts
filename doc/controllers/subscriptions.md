# Subscriptions

```ts
const subscriptionsController = new SubscriptionsController(client);
```

## Class Name

`SubscriptionsController`

## Methods

* [Aggregate Subscription](../../doc/controllers/subscriptions.md#aggregate-subscription)
* [Update Subscription](../../doc/controllers/subscriptions.md#update-subscription)
* [Cancel Subscription](../../doc/controllers/subscriptions.md#cancel-subscription)
* [Expire Subscriptions](../../doc/controllers/subscriptions.md#expire-subscriptions)


# Aggregate Subscription

```ts
async aggregateSubscription(
  xUserId: string,
  xAuthorization: string,
  body: OrderRequestType,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrderRespType>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xUserId` | `string` | Header, Required | UserId of an user who bought a subscription. This will be an IES userId |
| `xAuthorization` | `string` | Header, Required | This will be an IES system token |
| `body` | [`OrderRequestType`](../../doc/models/order-request-type.md) | Body, Required | Data |
| `xTransactionId` | `string \| undefined` | Header, Optional | Unique ID for a transaction |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrderRespType`](../../doc/models/order-resp-type.md)

## Example Usage

```ts
const xUserId = 'X-UserId4';

const xAuthorization = 'X-Authorization6';

const body: OrderRequestType = {
  orderNumber: '10034567',
  description: 'Sample description of the API',
  subscriptionModelName: 'Mojo',
  storeCode: 'US',
  swapTitle: false,
  sendEmail: true,
  orderRequestTypeProducts: [
    {
      isbn: '4280134085545',
      ppid: 'A101702992101',
    },
    {
      isbn: '4280134085546',
      ppid: 'A101702992102',
    }
  ],
  customFields: [
    {
      name: 'paymentMethod__c',
      value: 'CREDIT CARD',
    },
    {
      name: 'paymentInfo__c',
      value: 'CREDIT CARD',
    },
    {
      name: 'paymentToken__c',
      value: '4111111111111111',
    },
    {
      name: 'iesId__c',
      value: 'ea9mmnj1qe2tghnb3',
    },
    {
      name: 'hybrisAccountNumber__c',
      value: '456',
    },
    {
      name: 'tepAccountNumber__c',
      value: 'c123',
    },
    {
      name: 'institutionId__c',
      value: '5678',
    },
    {
      name: 'tepPartyId__c',
      value: 'GH6789',
    },
    {
      name: 'campaignName__c',
      value: 'test val',
    },
    {
      name: 'promoCode__c',
      value: 'PM10',
    },
    {
      name: 'couponCode__c',
      value: 'BA10',
    },
    {
      name: 'discountCodeStartDate__c',
      value: '2021-09-21',
    },
    {
      name: 'discountCodeEndDate__c',
      value: '2021-11-21',
    },
    {
      name: 'amountBeforeTax__c',
      value: '9.99',
    },
    {
      name: 'discountedAmountBeforeTax__c',
      value: '9.99',
    },
    {
      name: 'subscriptionSource__c',
      value: 'channel_partner',
    },
    {
      name: 'upFrontPayment__c',
      value: 'true',
    },
    {
      name: 'embeddedPromoCode__c',
      value: 'string',
    },
    {
      name: 'discountCodeDescription__c',
      value: 'string',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionsController.aggregateSubscription(
  xUserId,
  xAuthorization,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`InvalidReqTypeError`](../../doc/models/invalid-req-type-error-1.md) |
| 401 | Unauthorized | [`AuthErrorTypeError`](../../doc/models/auth-error-type-error.md) |
| 500 | Error | [`OrderRespTypeError`](../../doc/models/order-resp-type-error.md) |


# Update Subscription

```ts
async updateSubscription(
  xUserId: string,
  xAuthorization: string,
  body: UpdateSubscription,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrderRespType>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xUserId` | `string` | Header, Required | UserId of an user who bought a subscription. This will be an IES userId |
| `xAuthorization` | `string` | Header, Required | This will be an IES system token |
| `body` | [`UpdateSubscription`](../../doc/models/update-subscription.md) | Body, Required | Data |
| `xTransactionId` | `string \| undefined` | Header, Optional | Unique ID for a transaction |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrderRespType`](../../doc/models/order-resp-type.md)

## Example Usage

```ts
const xUserId = 'X-UserId4';

const xAuthorization = 'X-Authorization6';

const body: UpdateSubscription = {
  orderType: OrderTypeEnum.UPGRADE,
  orderNumber: '10034567',
  description: 'Sample description of the API',
  existingAccountNumber: 'A000000001',
  updateSubscriptionProducts: [
    {
      isbn: '20045634128',
      ppid: 'A101702992101',
      endDate: '2021-05-14T07:12:27.152-0500',
    },
    {
      isbn: '10045634128',
      ppid: 'A101702992102',
      endDate: '2021-05-14T07:12:27.152-0500',
    }
  ],
  customFields: [
    {
      name: 'paymentMethod__c',
      value: 'CREDIT CARD',
    },
    {
      name: 'paymentInfo__c',
      value: 'CREDIT CARD',
    },
    {
      name: 'paymentToken__c',
      value: '4111111111111111',
    },
    {
      name: 'iesId__c',
      value: 'ea9mmnj1qe2tghnb3',
    },
    {
      name: 'hybrisAccountNumber__c',
      value: '456',
    },
    {
      name: 'tepAccountNumber__c',
      value: 'c123',
    },
    {
      name: 'institutionId__c',
      value: '5678',
    },
    {
      name: 'tepPartyId__c',
      value: 'GH6789',
    },
    {
      name: 'campaignName__c',
      value: 'test val',
    },
    {
      name: 'promoCode__c',
      value: 'PM10',
    },
    {
      name: 'couponCode__c',
      value: 'BA10',
    },
    {
      name: 'discountCodeStartDate__c',
      value: '2021-09-21',
    },
    {
      name: 'discountCodeEndDate__c',
      value: '2021-11-21',
    },
    {
      name: 'amountBeforeTax__c',
      value: '9.99',
    },
    {
      name: 'discountedAmountBeforeTax__c',
      value: '9.99',
    },
    {
      name: 'subscriptionSource__c',
      value: 'channel_partner',
    },
    {
      name: 'upFrontPayment__c',
      value: 'true',
    },
    {
      name: 'embeddedPromoCode__c',
      value: 'string',
    },
    {
      name: 'discountCodeDescription__c',
      value: 'string',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscription(
  xUserId,
  xAuthorization,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`InvalidReqTypeError`](../../doc/models/invalid-req-type-error-1.md) |
| 401 | Unauthorized | [`AuthErrorTypeError`](../../doc/models/auth-error-type-error.md) |
| 500 | Error | [`OrderErrorTypeError`](../../doc/models/order-error-type-error.md) |


# Cancel Subscription

Cancel subscription for a given subscription ID

```ts
async cancelSubscription(
  userId: string,
  xAuthorization: string,
  body: CancelReqType,
  xTransactionId?: string,
  origin?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelResType>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Header, Required | UserId of an user who bought a subscription. This will be an IES userId |
| `xAuthorization` | `string` | Header, Required | This will be an IES system token |
| `body` | [`CancelReqType`](../../doc/models/cancel-req-type.md) | Body, Required | Data |
| `xTransactionId` | `string \| undefined` | Header, Optional | Unique ID for a transaction |
| `origin` | `string \| undefined` | Header, Optional | Originating System |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelResType`](../../doc/models/cancel-res-type.md)

## Example Usage

```ts
const userId = 'userId0';

const xAuthorization = 'X-Authorization6';

const body: CancelReqType = {
  subscriptionId: 'urn:pearson:gps:subs:649e7109fc57341ba129e23',
  subscriptionSource: SubscriptionSourceEnum.Internal,
  cancelReason: 'No longer need service',
  cancelDate: '2023-06-30',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.cancelSubscription(
  userId,
  xAuthorization,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`InvalidReqTypeError`](../../doc/models/invalid-req-type-error-1.md) |
| 401 | Unauthorized | [`AuthErrorTypeError`](../../doc/models/auth-error-type-error.md) |
| 500 | Error | [`OrderErrorTypeError`](../../doc/models/order-error-type-error.md) |


# Expire Subscriptions

Expire subscription for all past enddate internal and IA subscriptions

```ts
async expireSubscriptions(
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelResType>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CancelResType`](../../doc/models/cancel-res-type.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await subscriptionsController.expireSubscriptions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`InvalidReqTypeError`](../../doc/models/invalid-req-type-error-1.md) |
| 401 | Unauthorized | [`AuthErrorTypeError`](../../doc/models/auth-error-type-error.md) |
| 500 | Error | [`OrderErrorTypeError`](../../doc/models/order-error-type-error.md) |

