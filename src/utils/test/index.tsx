import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from '@testing-library/react-native';
import React from 'react';
import { RouteParams } from '../../components/screens';
import ContextsProvider from '../../providers';

const Stack = createNativeStackNavigator();
const MockedNavigator = ({ component, params = {} }) => {
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
