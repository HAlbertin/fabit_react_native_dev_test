import { useMutation } from 'react-query';
import { post } from '../services/api';
import ENDPOINTS from '../services/api/_endpoints';
import { ISignUpRequestBody, ISignupResponse, SignupErrorResponse } from '../services/api/_interfaces';

type Props = {
  onSuccess: (response: ISignupResponse) => void;
  onError: (err: SignupErrorResponse) => void;
};

const useSignup = (params: Props) => {
  return useMutation(async (data: ISignUpRequestBody) => {
    try {
      const response = await post(ENDPOINTS.ACCESS.CREATE, data);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }, params);
};

export default useSignup;
