import { useMutation } from 'react-query';
import ApiService from '../services/api';
import { ISignUpRequestBody, ISignupResponse } from '../services/api/interfaces/signup.interfaces';
import ENDPOINTS from '../services/api/_endpoints';

type Props = {
  onSuccess: (response: ISignupResponse) => void;
  onError: (err: Error) => void;
};

const useSignup = (params: Props) => {
  return useMutation(async (data: ISignUpRequestBody) => {
    try {
      const response = await ApiService.post(ENDPOINTS.ACCESS.CREATE, data);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }, params);
};

export default useSignup;
