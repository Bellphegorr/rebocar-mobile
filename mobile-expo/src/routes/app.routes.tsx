import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Account } from "../screens/Account";
import { Options } from "../screens/Options";
import { SignIn } from "../screens/SignIn";

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Perfil"
                component={Account}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons
                            name="account-circle"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Opções"
                component={Options}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons
                            name="settings"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}