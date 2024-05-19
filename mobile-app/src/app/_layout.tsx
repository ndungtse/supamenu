import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "./style.css";

import AppSplashScreen from '@/components/shared/AppSplashScreen';
import { AuthProvider } from '@/conntexts/AuthProvider';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeWindStyleSheet } from 'nativewind';
import AppProvider from '@/conntexts/AppProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <AppSplashScreen />;
    // return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppProvider>
          <SafeAreaView
            style={{
              flex: 1,
              // backgroundColor: colorScheme === 'dark' ? DarkTheme.colors.background : DefaultTheme.colors.background,
            }}
            edges={[]}
          >
            <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              {/* <Stack.Screen options={{ headerShown: false }} name="index" /> */}
              <Stack.Screen name="+not-found" />
            </Stack>
          </SafeAreaView>
        </AppProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
