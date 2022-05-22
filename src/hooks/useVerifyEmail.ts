import { useQuery } from 'react-query';
import REACT_QUERY_CONSTANTS from '../constants/query.constants';
import ApiService from '../services/api';
import { IMonitorResponse, MonitorErrorResponse } from '../services/api/interfaces/monitor.interfaces';
import ENDPOINTS from '../services/api/_endpoints';
import StorageUtils from '../utils/storage';

const useVerifyEmail = (
  onSuccess: (response: IMonitorResponse) => void,
  onError: (error: MonitorErrorResponse) => void,
  retry = Infinity,
) => {
  return useQuery<IMonitorResponse, MonitorErrorResponse>(
    REACT_QUERY_CONSTANTS.MONITOR_SESSION,
    async () => {
      try {
        const session = StorageUtils.getItem('USER_SESSION_VERIFY');
        if (!session) throw new Error('No session');
        const response = await ApiService.get<IMonitorResponse>(ENDPOINTS.ACCESS.MONITOR_SESSION, [session]);

        // if code is 200 and secret is empty, it means the email needs to be verified
        if (!response.secret) throw new Error('Secret is empty');

        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    { onSuccess, onError, retry, cacheTime: 0 },
  );
};

export default useVerifyEmail;
