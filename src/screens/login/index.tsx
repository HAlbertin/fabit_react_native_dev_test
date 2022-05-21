import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { RouteStackParamList } from '..';
import ButtonContained from '../../components/buttons/buttonContained';
import InputText from '../../components/inputText';
import KeyboardAvoid from '../../components/keyboardAvoid';
import Layout from '../../components/layout';
import Loading from '../../components/loading';
import useLogin from '../../hooks/useLogin';
import {
  ILoginResponse,
  LoginErrorResponse,
  LOGIN_ERROR_MESSAGES,
} from '../../services/api/interfaces/login.interfaces';
import { translate } from '../../utils/language';
import StorageUtils from '../../utils/storage';
import ValidationUtils from '../../utils/validation';
import * as S from './styles';

const LoginScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'LoginScreen'>> = ({ navigation }) => {
  const loginSchemaValidation = Yup.object().shape({
    email: Yup.string().email(translate('LoginScreen_EmailInvalid')).required(translate('LoginScreen_EmailRequired')),
  });

  const initialValues = {
    email: '',
  };

  const onSubmit = ({ email }, { setSubmitting }: FormikHelpers<{ email: string }>) => {
    mutate(email, { onSettled: (): void => setSubmitting(false) });
  };

  const onError = (error: LoginErrorResponse) => {
    /**
     * TODO shows error to the user in screen
     */
    console.error(LOGIN_ERROR_MESSAGES[error]);
  };

  const onSuccess = (response: ILoginResponse) => {
    if (response.new_account === true) {
      navigation.reset({ index: 0, routes: [{ name: 'SignupScreen', params: { email: response.email } }] });
      return;
    }

    StorageUtils.setItem('USER_SESSION', response.session_key);
    navigation.reset({ index: 0, routes: [{ name: 'EmailScreen' }] });
  };

  const { mutate } = useLogin({ onError, onSuccess });

  return (
    <Layout headerTitle="LoginScreen_HeaderTitle">
      <KeyboardAvoid>
        <Formik validationSchema={loginSchemaValidation} initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, handleChange, values, isValid, errors, dirty, isSubmitting }) => (
            <>
              <S.FormContainer>
                <InputText
                  placeholder={translate('LoginScreen_EmailPlaceholder')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  errorText={errors?.email?.toString()}
                  label="LoginScreen_Email"
                  testID="email-input"
                />

                <ButtonContained
                  disabled={ValidationUtils.formDisabled({ dirty, isValid, isSubmitting })}
                  onPress={handleSubmit}
                  text="LanguageScreen_ContinueButton"
                />
              </S.FormContainer>
              {isSubmitting && <Loading />}
            </>
          )}
        </Formik>
      </KeyboardAvoid>
    </Layout>
  );
};

export default LoginScreen;
