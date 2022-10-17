import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { SignIn } from "./src/screens/SignIn";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <SignIn></SignIn>
    </ThemeProvider>
  );
}
