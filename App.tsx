import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { List, Create } from './containers';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tasks" component={List} options={{ headerShown: false }}
        />
        <Stack.Screen name="Create" component={Create} options={{
          animation: 'fade_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
