/**
 * Pearson Subscriptions APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { AuthError } from '../models/authError';

/**
 * Creates an instance of AuthErrorType
 */
interface AuthErrorType {
  authError?: AuthError;
}

export class AuthErrorTypeError extends ApiError<AuthErrorType> {}
