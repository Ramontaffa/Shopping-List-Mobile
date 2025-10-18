import { Slot, SplashScreen } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@expo-google-fonts/inter";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { useCallback, useEffect } from "react";
import { ThemeProvider } from "@components";
import "../src/styles/global.css";
import * as SystemUI from 'expo-system-ui'; 
import theme from "../src/styles/theme";
import React from "react";

SplashScreen.preventAutoHideAsync();

const BACKGROUND_COLOR = theme.colors.background; 

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(BACKGROUND_COLOR);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
        <ThemeProvider>
          <Slot />
        </ThemeProvider>
    </SafeAreaProvider>
  );
}