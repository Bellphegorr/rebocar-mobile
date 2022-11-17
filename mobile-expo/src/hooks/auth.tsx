import React, {
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect
} from 'react';

import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps{
    children: ReactNode;
}

interface User{
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface IAuthContextData{
    user: User;
    signInWithGoogle(): Promise<void>;
}

interface AuthorizationResponse {
    params: {
        access_token: string;
    };
    type: string;
}

const { EXPO_CLIENT_ID } = process.env;
const { CLIENT_SECRET } = process.env;
const { REDIRECT_URI } = process.env;

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User);

    async function signInWithGoogle() {
        try {
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${EXPO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
            
            if(type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();
                
                console.log(userInfo);

                const userLogged = {
                    id: String(userInfo.id),
                    name: userInfo.given_name!,
                    email: userInfo.email!,
                    photo: userInfo.picture!
                };

                setUser(userLogged);
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    return(
        <AuthContext.Provider value={{ 
            user,
            signInWithGoogle
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth};