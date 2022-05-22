import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik, FormikHelpers } from 'formik';
import React, { useCallback, useMemo } from 'react';
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
  const loginSchemaValidation = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email(translate('LoginScreen_EmailInvalid'))
          .required(translate('LoginScreen_EmailRequired')),
      }),
    [],
  );

  const initialValues = {
    email: '',
  };

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

  const { mutate } = useLogin({ onError, onSuccess });

  const onSubmit = useCallback(
    ({ email }, { setSubmitting }: FormikHelpers<{ email: string }>) => {
      mutate(email, { onSettled: (): void => setSubmitting(false) });
    },
    [mutate],
  );

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
