import { NativeStackScreenProps } from '@react-navigation/native-stack';
import produce from 'immer';
import React, { useMemo, useState } from 'react';
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
  SignupErrorResponse,
  SIGNUP_ERROR_MESSAGES,
} from '../../services/api/interfaces/signup.interfaces';
import { theme } from '../../theme';
import CountriesUtils from '../../utils/countries';
import { getCurrentLanguage, translate } from '../../utils/language';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

export type SignupProps = {
  email: string;
};

const SignupScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'SignupScreen'>> = ({
  route: { params },
  navigation,
}) => {
  const { email } = params;
  const [selectedCountry, setSelectedCountry] = useState<KeyValue>();
  const [selectedState, setSelectedState] = useState<KeyValue>();

  const countries = useMemo(() => CountriesUtils.GetAllCountries(), []);

  const isUsa = selectedCountry?.key === USA_COUNTRY_CODE;

  const disabledSubmit = isUsa ? !selectedState : !selectedCountry;

  const onCountryPress = (selected: KeyValue) => {
    setSelectedCountry(produce(() => selected));
  };

  const onStatePress = (selected: KeyValue) => {
    setSelectedState(produce(() => selected));
  };

  const onSuccess = (response: ISignupResponse) => {
    StorageUtils.setItem('USER_SESSION_VERIFY', response.session_key);
    navigation.reset({ index: 0, routes: [{ name: 'EmailScreen' }] });
  };

  const onError = (error: SignupErrorResponse) => {
    /**
     * TODO shows error to the user in screen
     */
    console.error(SIGNUP_ERROR_MESSAGES[error]);
  };

  const signIn = () => {
    const body: ISignUpRequestBody = {
      country: selectedCountry.key,
      email_address: email,
      language: getCurrentLanguage(),
    };
    isUsa && (body['state'] = selectedState.value.toLowerCase());
    mutate(body);
  };

  const { mutate, isLoading } = useSignup({ onSuccess, onError });

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
