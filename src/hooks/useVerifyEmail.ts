import { useQuery } from 'react-query';
import REACT_QUERY_CONSTANTS from '../constants/query.constants';
import { get } from '../services/api';
import { IMonitorResponse, MonitorErrorResponse } from '../services/api/interfaces/monitor.interfaces';
import ENDPOINTS from '../services/api/_endpoints';
import StorageUtils from '../utils/storage';

const useVerifyEmail = (
  onSuccess: (response: IMonitorResponse) => void,
  onError: (error: MonitorErrorResponse) => void,
) => {
  return useQuery<IMonitorResponse, MonitorErrorResponse>(
    REACT_QUERY_CONSTANTS.MONITOR_SESSION,
    async () => {
      try {
        const session = StorageUtils.getItem('USER_SESSION');
        const response = await get<IMonitorResponse>(ENDPOINTS.ACCESS.MONITOR_SESSION, [session]);
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    { onSuccess, onError },
  );
};

export default useVerifyEmail;
