import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// import { AuthProvider } from "./src/contexts/auth-context";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content"/>
      <AuthProvider>
          <Routes/>
      </AuthProvider>
    </ThemeProvider>
  );
}
