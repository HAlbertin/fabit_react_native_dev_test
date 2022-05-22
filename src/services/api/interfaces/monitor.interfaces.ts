export interface IMonitorResponse {
  expired: boolean;
  secret: string;
}

export enum MonitorErrorResponse {
  INVALID_REQUEST = '_INVALID_REQUEST_\n',
  SOMETHING_WENT_WRONG = '_SOMETHING_WENT_WRONG_\n',
  LOGIN_COMPLETE = '_LOGIN_COMPLETE_\n',
  EXPIRED_MAGIC_LINK = '_EXPIRED_MAGIC_LINK_\n',
}

export const MONITOR_ERROR_MESSAGES = {
  [MonitorErrorResponse.INVALID_REQUEST]: 'EmailScreen_ErrorMessage_InvalidRequest',
  [MonitorErrorResponse.SOMETHING_WENT_WRONG]: 'EmailScreen_ErrorMessage_Unknow',
  [MonitorErrorResponse.LOGIN_COMPLETE]: 'EmailScreen_ErrorMessage_EmailRequired',
  [MonitorErrorResponse.EXPIRED_MAGIC_LINK]: 'EmailScreen_ErrorMessage_InvalidEmail',
} as const;
