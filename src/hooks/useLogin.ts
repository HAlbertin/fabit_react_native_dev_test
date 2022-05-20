import { useMutation } from 'react-query';
import { post } from '../services/api';
import ENDPOINTS from '../services/api/_endpoints';
import { ILoginResponse, LoginErrorResponse } from '../services/api/_interfaces';

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
        const response = await post(ENDPOINTS.ACCESS.LOGIN, { email_address: email });
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
