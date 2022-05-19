import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LanguageScreen from './language';

export type RouteStackParamList = {
  LanguageScreen: undefined;
};

export type RouteName = keyof RouteStackParamList;
export type RouteParams = RouteStackParamList[RouteName];

const { Navigator, Screen } = createNativeStackNavigator();

const Screens: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}
      initialRouteName="LanguageScreen"
    >
      <Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: false }} />
    </Navigator>
  </NavigationContainer>
);

export default Screens;
