/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { CancelReqType, cancelReqTypeSchema } from '../models/cancelReqType';
import { CancelResType, cancelResTypeSchema } from '../models/cancelResType';
import {
  OrderRequestType,
  orderRequestTypeSchema,
} from '../models/orderRequestType';
import { OrderRespType, orderRespTypeSchema } from '../models/orderRespType';
import {
  UpdateSubscription,
  updateSubscriptionSchema,
} from '../models/updateSubscription';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { AuthErrorTypeError } from '../errors/authErrorTypeError';
import { InvalidReqTypeError } from '../errors/invalidReqTypeError';
import { OrderErrorTypeError } from '../errors/orderErrorTypeError';
import { OrderRespTypeError } from '../errors/orderRespTypeError';

export class SubscriptionsController extends BaseController {
  /**
   * @param xUserId         UserId of an user who bought a subscription. This will be an
   *                                                   IES userId
   * @param xAuthorization  This will be an IES system token
   * @param body            Data
   * @param xTransactionId  Unique ID for a transaction
   * @return Response from the API call
   */
  async aggregateSubscription(
    xUserId: string,
    xAuthorization: string,
    body: OrderRequestType,
    xTransactionId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrderRespType>> {
    const req = this.createRequest('POST', '/v1/mojo/aggregate-subscription');
    const mapped = req.prepareArgs({
      xUserId: [xUserId, string()],
      xAuthorization: [xAuthorization, string()],
      body: [body, orderRequestTypeSchema],
      xTransactionId: [xTransactionId, optional(string())],
    });
    req.header('X-UserId', mapped.xUserId);
    req.header('X-Authorization', mapped.xAuthorization);
    req.header('Content-Type', 'application/json');
    req.header('X-TransactionId', mapped.xTransactionId);
    req.json(mapped.body);
    req.throwOn(400, InvalidReqTypeError, 'Bad Request');
    req.throwOn(401, AuthErrorTypeError, 'Unauthorized');
    req.throwOn(500, OrderRespTypeError, 'Error');
    return req.callAsJson(orderRespTypeSchema, requestOptions);
  }

  /**
   * @param xUserId         UserId of an user who bought a subscription. This will be an
   *                                                     IES userId
   * @param xAuthorization  This will be an IES system token
   * @param body            Data
   * @param xTransactionId  Unique ID for a transaction
   * @return Response from the API call
   */
  async updateSubscription(
    xUserId: string,
    xAuthorization: string,
    body: UpdateSubscription,
    xTransactionId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrderRespType>> {
    const req = this.createRequest('PUT', '/v1/mojo/aggregate-subscription');
    const mapped = req.prepareArgs({
      xUserId: [xUserId, string()],
      xAuthorization: [xAuthorization, string()],
      body: [body, updateSubscriptionSchema],
      xTransactionId: [xTransactionId, optional(string())],
    });
    req.header('X-UserId', mapped.xUserId);
    req.header('X-Authorization', mapped.xAuthorization);
    req.header('Content-Type', 'application/json');
    req.header('X-TransactionId', mapped.xTransactionId);
    req.json(mapped.body);
    req.throwOn(400, InvalidReqTypeError, 'Bad Request');
    req.throwOn(401, AuthErrorTypeError, 'Unauthorized');
    req.throwOn(500, OrderErrorTypeError, 'Error');
    return req.callAsJson(orderRespTypeSchema, requestOptions);
  }

  /**
   * Cancel subscription for a given subscription ID
   *
   * @param userId          UserId of an user who bought a subscription. This will be an IES
   *                                                userId
   * @param xAuthorization  This will be an IES system token
   * @param body            Data
   * @param xTransactionId  Unique ID for a transaction
   * @param origin          Originating System
   * @return Response from the API call
   */
  async cancelSubscription(
    userId: string,
    xAuthorization: string,
    body: CancelReqType,
    xTransactionId?: string,
    origin?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelResType>> {
    const req = this.createRequest('PUT', '/v1/subscriptions/cancel');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      xAuthorization: [xAuthorization, string()],
      body: [body, cancelReqTypeSchema],
      xTransactionId: [xTransactionId, optional(string())],
      origin: [origin, optional(string())],
    });
    req.header('userId', mapped.userId);
    req.header('X-Authorization', mapped.xAuthorization);
    req.header('Content-Type', 'application/json');
    req.header('X-TransactionId', mapped.xTransactionId);
    req.header('origin', mapped.origin);
    req.json(mapped.body);
    req.throwOn(400, InvalidReqTypeError, 'Bad Request');
    req.throwOn(401, AuthErrorTypeError, 'Unauthorized');
    req.throwOn(500, OrderErrorTypeError, 'Error');
    return req.callAsJson(cancelResTypeSchema, requestOptions);
  }

  /**
   * Expire subscription for all past enddate internal and IA subscriptions
   *
   * @return Response from the API call
   */
  async expireSubscriptions(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CancelResType>> {
    const req = this.createRequest('GET', '/v1/subscriptions/expiry');
    req.throwOn(400, InvalidReqTypeError, 'Bad Request');
    req.throwOn(401, AuthErrorTypeError, 'Unauthorized');
    req.throwOn(500, OrderErrorTypeError, 'Error');
    return req.callAsJson(cancelResTypeSchema, requestOptions);
  }
}
