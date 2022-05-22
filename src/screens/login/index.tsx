import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { RouteStackParamList } from '..';
import ButtonContained from '../../components/buttons/buttonContained';
import InputText from '../../components/inputText';
import KeyboardAvoid from '../../components/keyboardAvoid';
import Layout from '../../components/layout';
import Loading from '../../components/loading';
import useLogin from '../../hooks/useLogin';
import { ILoginResponse, LOGIN_ERROR_MESSAGES } from '../../services/api/interfaces/login.interfaces';
import { translate } from '../../utils/language';
import ShowMessageUtils from '../../utils/showMessage';
import StorageUtils from '../../utils/storage';
import ValidationUtils from '../../utils/validation';
import * as S from './styles';

const LoginScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'LoginScreen'>> = ({ navigation }) => {
  const loginSchemaValidation = Yup.object().shape({
    email: Yup.string().email(translate('LoginScreen_EmailInvalid')).required(translate('LoginScreen_EmailRequired')),
  });

  const onError = (error: Error) => ShowMessageUtils.showMessage(LOGIN_ERROR_MESSAGES[error.message]);

  const onSuccess = useCallback(
    (response: ILoginResponse) => {
      if (response.new_account === true) {
        navigation.navigate('SignupScreen', { email: response.email });
        return;
      }

      StorageUtils.setItem('USER_SESSION_VERIFY', response.session_key);
      navigation.reset({ index: 0, routes: [{ name: 'EmailScreen' }] });
    },
    [navigation],
  );

  const { mutate, isLoading } = useLogin({ onError, onSuccess });

  const onSubmit = ({ email }) => {
    mutate(email);
  };

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(loginSchemaValidation), reValidateMode: 'onChange' });

  return (
    <Layout headerTitle="LoginScreen_HeaderTitle">
      <KeyboardAvoid>
        <S.FormContainer>
          <InputText
            placeholder={translate('LoginScreen_EmailPlaceholder')}
            textContentType="emailAddress"
            keyboardType="email-address"
            errorText={errors?.email?.message}
            label="LoginScreen_Email"
            testID="email-input"
            onChangeText={text => setValue('email', text, { shouldValidate: true })}
            {...register('email')}
          />

          <ButtonContained
            disabled={ValidationUtils.formDisabled({ isValid, isSubmitting })}
            onPress={() => {
              handleSubmit(onSubmit)();
            }}
            text="LanguageScreen_ContinueButton"
          />
        </S.FormContainer>
        {isLoading && <Loading />}
      </KeyboardAvoid>
    </Layout>
  );
};

export default LoginScreen;
