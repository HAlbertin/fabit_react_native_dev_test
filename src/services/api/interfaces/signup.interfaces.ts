export interface ISignUpRequestBody {
  email_address: string;
  language: string;
  country: string;
  state?: string;
}

export interface ISignupResponse {
  session_key: string;
}

export enum SignupErrorResponse {
  INVALID_REQUEST = '_INVALID_REQUEST_\n',
  SOMETHING_WENT_WRONG = '_SOMETHING_WENT_WRONG_\n',
  EMAIL_ADDRESS_REQUIRED = '_EMAIL_ADDRESS_REQUIRED_\n',
  INVALID_EMAIL_ADDRESS = '_INVALID_EMAIL_ADDRESS_\n',
  ACCOUNT_SUSPENDED = '_ACCOUNT_SUSPENDED_\n',
  ACCOUNT_CLOSED = '_ACCOUNT_CLOSED_\n',
  ACCOUNT_IS_LOCKED_ = '_ACCOUNT_IS_LOCKED_\n',
  STATE_NOT_SUPPORTED = '_STATE_NOT_SUPPORTED_\n',
}

export const SIGNUP_ERROR_MESSAGES = {
  [SignupErrorResponse.INVALID_REQUEST]: 'SignupScreen_ErrorMessage_InvalidRequest',
  [SignupErrorResponse.SOMETHING_WENT_WRONG]: 'SignupScreen_ErrorMessage_Unknow',
  [SignupErrorResponse.EMAIL_ADDRESS_REQUIRED]: 'SignupScreen_ErrorMessage_EmailRequired',
  [SignupErrorResponse.INVALID_EMAIL_ADDRESS]: 'SignupScreen_ErrorMessage_InvalidEmail',
  [SignupErrorResponse.ACCOUNT_SUSPENDED]: 'SignupScreen_ErrorMessage_AccountSuspended',
  [SignupErrorResponse.ACCOUNT_CLOSED]: 'SignupScreen_ErrorMessage_AccountClosed',
  [SignupErrorResponse.ACCOUNT_IS_LOCKED_]: 'SignupScreen_ErrorMessage_AccountLocked',
  [SignupErrorResponse.STATE_NOT_SUPPORTED]: 'SignupScreen_ErrorMessage_StateNotSupported',
} as const;
