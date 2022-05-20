export interface ILoginResponse {
  session_key: string;
  new_account: boolean;
  reactivation: boolean;
}

export enum LoginErrorResponse {
  INVALID_REQUEST = '_INVALID_REQUEST_',
  SOMETHING_WENT_WRONG = '_SOMETHING_WENT_WRONG_',
  EMAIL_ADDRESS_REQUIRED = '_EMAIL_ADDRESS_REQUIRED_',
  INVALID_EMAIL_ADDRESS = '_INVALID_EMAIL_ADDRESS_',
  ACCOUNT_SUSPENDED = '_ACCOUNT_SUSPENDED_',
  ACCOUNT_CLOSED = '_ACCOUNT_CLOSED_',
  ACCOUNT_IS_LOCKED_ = '_ACCOUNT_IS_LOCKED_',
}

export const LOGIN_ERROR_MESSAGES = {
  [LoginErrorResponse.INVALID_REQUEST]: 'LoginScreen_ErrorMessage_InvalidRequest',
  [LoginErrorResponse.SOMETHING_WENT_WRONG]: 'LoginScreen_ErrorMessage_Unknow',
  [LoginErrorResponse.EMAIL_ADDRESS_REQUIRED]: 'LoginScreen_ErrorMessage_EmailRequired',
  [LoginErrorResponse.INVALID_EMAIL_ADDRESS]: 'LoginScreen_ErrorMessage_InvalidEmail',
  [LoginErrorResponse.ACCOUNT_SUSPENDED]: 'LoginScreen_ErrorMessage_AccountSuspended',
  [LoginErrorResponse.ACCOUNT_CLOSED]: 'LoginScreen_ErrorMessage_AccountClosed',
  [LoginErrorResponse.ACCOUNT_IS_LOCKED_]: 'LoginScreen_ErrorMessage_AccountLocked',
};
