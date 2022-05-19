import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from '@testing-library/react-native';
import React from 'react';
import ContextsProvider from '../../providers';
import { RouteParams } from '../../screens';

const MockedNavigator = ({ component, params = {} }) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockedScreen" component={component} initialParams={params} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const renderWithNavigator = (component: React.FC, params?: RouteParams) => {
  return render(<MockedNavigator component={component} params={params} />, { wrapper: ContextsProvider });
};

export const renderWithProviders = (component: React.ReactElement) => {
  return render(component, { wrapper: ContextsProvider });
};
