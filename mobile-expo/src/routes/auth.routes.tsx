import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AuthRouts(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false   
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}