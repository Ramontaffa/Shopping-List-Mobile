import { Slot, SplashScreen } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import {
  Barlow_300Light,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_600SemiBold,
} from "@expo-google-fonts/barlow";
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
    Barlow_300Light,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
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