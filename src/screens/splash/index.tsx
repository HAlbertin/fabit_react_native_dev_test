import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { RouteName, RouteStackParamList } from '..';
import { LogoSVG } from '../../assets/svgs/_index';
import UserUtils from '../../utils/user';
import * as S from './styles';

const SplashScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'SplashScreen'>> = ({ navigation }) => {
  useEffect(() => {
    const checkRedirect = () => {
      let nextScreen: RouteName = 'LanguageScreen';
      if (UserUtils.isUserLoggedIn()) {
        nextScreen = 'SuccessScreen';
      }
      if (UserUtils.userNeedsVerify()) {
        nextScreen = 'EmailScreen';
      }

      navigation.reset({ index: 0, routes: [{ name: nextScreen }] });
    };

    checkRedirect();
  });

  return (
    <S.Content>
      <LogoSVG />
    </S.Content>
  );
};

export default SplashScreen;
