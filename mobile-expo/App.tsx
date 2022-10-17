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
import { UserRepository } from "../core/src";

export default function App() {
  const something = new UserRepository();
  something.getUser();
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
