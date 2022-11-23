import React from "react";
import { Platform } from "react-native";
import { MaterialIcons, MaterialCommunityIcons, Foundation, Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Account } from "../screens/Account";
import { Options } from "../screens/Options";

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#d3d3d3',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                    backgroundColor: theme.colors.primary,
                    paddingBottom: 15
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <Foundation
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Atividades"
                component={Options}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialCommunityIcons
                            name="clock"
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
                        <Ionicons
                            name="person-sharp"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}