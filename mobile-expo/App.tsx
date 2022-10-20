import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import { SignIn } from "./src/screens/sign-in";
import { Home } from "./src/screens/home";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator
          initialRouteName="Sign-in"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Sign-in" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
