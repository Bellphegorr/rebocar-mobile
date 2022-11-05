import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRouts } from './auth.routes';
import { AppRoutes } from './app.routes';

// import { useAuth } from '../hooks/auth';

export function Routes(){
    // const { user } = useAuth();

    return(
        <NavigationContainer>
            <AppRoutes />
            {/* <AuthRouts /> */}
        </NavigationContainer>
    )
}