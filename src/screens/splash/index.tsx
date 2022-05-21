import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RouteStackParamList } from '..';
import { LogoSVG } from '../../assets/svgs/_index';
import useVerifyEmail from '../../hooks/useVerifyEmail';
import { IMonitorResponse } from '../../services/api/interfaces/monitor.interfaces';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

const SplashScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'EmailScreen'>> = ({ navigation }) => {
  const goToLogin = () => {
    StorageUtils.deleteItem('USER_SESSION');
    navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] });
  };

  const onSuccess = (response: IMonitorResponse) => {
    if (response.expired) {
      goToLogin();
      return;
    }

    // TODO: confirm if needs to refresh that "secret"
    StorageUtils.setItem('USER_SESSION', response.secret);
    navigation.reset({ index: 0, routes: [{ name: 'SuccessScreen' }] });
  };

  const onError = () => {
    goToLogin();
  };

  useVerifyEmail(onSuccess, onError);

  return (
    <S.Content>
      <LogoSVG />
    </S.Content>
  );
};

export default SplashScreen;
