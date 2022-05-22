import { NativeStackScreenProps } from '@react-navigation/native-stack';
import produce from 'immer';
import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { RouteStackParamList } from '..';
import ButtonContained from '../../components/buttons/buttonContained';
import Typography from '../../components/fonts/typography';
import Layout from '../../components/layout';
import ListSelect from '../../components/listSelect';
import Loading from '../../components/loading';
import { USA_COUNTRY_CODE, US_STATES } from '../../constants/usaStates.constants';
import useSignup from '../../hooks/useSignup';
import { KeyValue } from '../../interfaces/listKeys';
import {
  ISignUpRequestBody,
  ISignupResponse,
  SIGNUP_ERROR_MESSAGES,
} from '../../services/api/interfaces/signup.interfaces';
import { theme } from '../../theme';
import CountriesUtils from '../../utils/countries';
import { getCurrentLanguage, translate } from '../../utils/language';
import ShowMessageUtils from '../../utils/showMessage';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

export type SignupProps = {
  email: string;
};

const SignupScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'SignupScreen'>> = ({
  route: { params: routeParams },
  navigation,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<KeyValue>();
  const [selectedState, setSelectedState] = useState<KeyValue>();

  const countries = useMemo(() => CountriesUtils.GetAllCountries(), []);

  const isUsa = useMemo(() => selectedCountry?.key === USA_COUNTRY_CODE, [selectedCountry?.key]);

  const disabledSubmit = useMemo(
    () => (isUsa ? !selectedState : !selectedCountry),
    [isUsa, selectedCountry, selectedState],
  );

  const onCountryPress = useCallback((selected: KeyValue) => {
    setSelectedCountry(produce(() => selected));
  }, []);

  const onStatePress = useCallback((selected: KeyValue) => {
    setSelectedState(produce(() => selected));
  }, []);

  const onSuccess = useCallback(
    (response: ISignupResponse) => {
      StorageUtils.setItem('USER_SESSION_VERIFY', response.session_key);
      navigation.reset({ index: 0, routes: [{ name: 'EmailScreen' }] });
    },
    [navigation],
  );

  const onError = (error: Error) => ShowMessageUtils.showMessage(SIGNUP_ERROR_MESSAGES[error.message]);

  const { mutate, isLoading } = useSignup({ onSuccess, onError });

  const signIn = useCallback(() => {
    const body: ISignUpRequestBody = {
      country: selectedCountry.key,
      email_address: routeParams.email,
      language: getCurrentLanguage(),
    };
    isUsa && (body.state = selectedState.key);
    mutate(body);
  }, [isUsa, mutate, routeParams.email, selectedCountry?.key, selectedState?.key]);

  return (
    <Layout headerTitle="SignupScreen_HeaderTitle">
      <S.Content>
        <View>
          <S.SubtitleContainer>
            <Typography
              color={theme.colors.placeholder}
              needsTranslate
              text="SignupScreen_Subtitle"
              testID="signup-subtitle"
              center
            />
          </S.SubtitleContainer>

          <ListSelect
            items={countries}
            onSelectedItem={onCountryPress}
            placeholder={selectedCountry?.value ?? translate('SignupScreen_CountryPlaceholder')}
            listTitle="SignupScreen_Bottomsheet_Country"
            label="SignupScreen_CountryLabel"
          />

          {isUsa && (
            <S.UsaStatesContainer>
              <ListSelect
                items={US_STATES}
                onSelectedItem={onStatePress}
                placeholder={selectedState?.value ?? translate('SignupScreen_StatePlaceholder')}
                listTitle="SignupScreen_Bottomsheet_StateLabel"
                label="SignupScreen_StateLabel"
              />
            </S.UsaStatesContainer>
          )}
        </View>

        <ButtonContained disabled={disabledSubmit} onPress={signIn} text="LanguageScreen_ContinueButton" />

        {isLoading && <Loading />}
      </S.Content>
    </Layout>
  );
};

export default SignupScreen;
