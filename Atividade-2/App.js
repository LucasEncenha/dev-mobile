import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Cronometro from './components/Cronometro';
import Relogio from './components/Relogio';

const Tab = createBottomTabNavigator();

function OutraTela() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Outra Tela</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Cronômetro"
          component={Cronometro}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stopwatch-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Relógio"
          component={Relogio}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Outra Tela"
          component={OutraTela}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="apps-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}