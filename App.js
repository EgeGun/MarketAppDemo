import React, { useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { CartProvider } from "./CartContext";
import HomeStack from './Routes/homeStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Raleway-Regular': require("./assets/Fonts/Raleway-Regular.ttf"),
    'Raleway-SemiBold': require("./assets/Fonts/Raleway-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <CartProvider>
      <HomeStack onLayoutRootView={onLayoutRootView}/>
    </CartProvider>
  );
}