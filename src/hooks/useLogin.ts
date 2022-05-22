import { useMutation } from 'react-query';
import ApiService from '../services/api';
import { ILoginResponse, LoginErrorResponse } from '../services/api/interfaces/login.interfaces';
import ENDPOINTS from '../services/api/_endpoints';

type Props = {
  onSuccess: (response: ILoginResponse) => void;
  onError: (err: LoginErrorResponse) => void;
};

const useLogin = (params: Props) => {
  let userEmail = '';
  return useMutation(
    async (email: string) => {
      userEmail = email;
      try {
        const body = { email_address: email };
        const response = await ApiService.post(ENDPOINTS.ACCESS.LOGIN, body);
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    {
      onSuccess: (data: ILoginResponse) => params.onSuccess({ ...data, email: userEmail }),
      onError: (err: LoginErrorResponse) => params.onError(err),
    },
  );
};

export default useLogin;
