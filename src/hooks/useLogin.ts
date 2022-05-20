import { useMutation } from 'react-query';
import { post } from '../services/api';
import ENDPOINTS from '../services/api/_endpoints';
import { ILoginResponse, LoginErrorResponse } from '../services/api/_interfaces';

type Props = {
  onSuccess: (response: ILoginResponse) => void;
  onError: (err: LoginErrorResponse) => void;
};

const useLogin = (params: Props) =>
  useMutation(async (email: string) => {
    try {
      const response = await post(ENDPOINTS.ACCESS.LOGIN, { email_address: email });
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }, params);

export default useLogin;
