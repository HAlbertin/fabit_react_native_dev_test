import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BackButton from '../components/backButton';
import LanguageScreen from './language';
import LoginScreen from './login';

export type RouteStackParamList = {
  LanguageScreen: undefined;
  LoginScreen: undefined;
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
          headerLeft: () => <BackButton onPress={goBack} />,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}
        initialRouteName="LanguageScreen"
      >
        <Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: false }} />
        <Screen name="LoginScreen" component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Screens;
