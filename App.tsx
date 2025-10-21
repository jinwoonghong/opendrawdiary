import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/contexts/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';
import WriteScreen from './src/screens/WriteScreen';
import ListScreen from './src/screens/ListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FAF8F3',
                borderBottomWidth: 1,
                borderBottomColor: '#E5E5E5',
              },
              headerTintColor: '#8B4513',
              headerTitleStyle: {
                fontWeight: '600',
                fontSize: 18,
              },
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ title: '서화일기' }}
            />
            <Stack.Screen 
              name="Write" 
              component={WriteScreen}
              options={{ title: '서화 그리기' }}
            />
            <Stack.Screen 
              name="List" 
              component={ListScreen}
              options={{ title: '서화첩 보기' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
