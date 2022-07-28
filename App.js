import * as React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';



LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
LogBox.ignoreLogs(["expo-app-loading is deprecated"]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading /> // substituir por splash art
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

