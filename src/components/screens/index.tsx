import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ConfigScreen from './config';

export type RouteStackParamList = {
  ActivateTransitCardScreen: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator();

const Screens: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}
      initialRouteName="HomeDrawerScreen"
    >
      <Screen
        name="ConfigScreen"
        component={ConfigScreen}
        options={{
          title: 'ConfigScreen Title',
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Screens;
