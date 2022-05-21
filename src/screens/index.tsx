import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MiniLogoSVG } from '../assets/svgs/_index';
import BackButton from '../components/backButton';
import { theme } from '../theme';
import EmailScreen from './email';
import LanguageScreen from './language';
import LoginScreen from './login';
import SignupScreen, { SignupProps } from './signup';
import SplashScreen from './splash';
import SuccessScreen from './success';

export type RouteStackParamList = {
  SplashScreen: undefined;
  LanguageScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: SignupProps;
  EmailScreen: undefined;
  SuccessScreen: undefined;
};

export type RouteName = keyof RouteStackParamList;
export type RouteParams = RouteStackParamList[RouteName];

const { Navigator, Screen } = createNativeStackNavigator();

export const navigationRef = React.createRef<NavigationContainerRef<RouteStackParamList>>();

const Screens: React.FC = () => {
  const goBack = () => navigationRef.current.goBack();
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerLeft: ({ canGoBack }) => canGoBack && <BackButton onPress={goBack} />,
          headerRight: () => <MiniLogoSVG />,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        initialRouteName="SplashScreen"
      >
        <Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: false }} />
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SignupScreen" component={SignupScreen} />
        <Screen name="EmailScreen" component={EmailScreen} options={{ headerShown: false }} />
        <Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Screens;
