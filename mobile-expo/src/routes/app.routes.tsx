import React from "react";
import { Platform, Text } from "react-native";
import {
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Account } from "../screens/Account";
import { Activities } from "../screens/Activities";
import { Driver } from "../screens/Driver";
import { Travel } from "../screens/Travel";

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#d3d3d3",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === "ios" ? 10 : 0,
          backgroundColor: theme.colors.primary,
          paddingBottom: 15,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Atividades"
        component={Activities}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="clock" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Driver"
        component={Driver}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Travel"
        component={Travel}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Home1() {
  return (
    <>
      <Text>Home1</Text>
    </>
  );
}

function Home2() {
  return (
    <>
      <Text>Home2</Text>
    </>
  );
}

function Home3() {
  return (
    <>
      <Text>Home3</Text>
    </>
  );
}
