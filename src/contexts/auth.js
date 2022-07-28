import React, { createContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigation = useNavigation();


    async function handleGoogleSignIn() {
        try {
            const CLIENT_ID = "940388462192-o8feka7j2u6mi57hc9n3as1bvlr38n8j.apps.googleusercontent.com";
            const REDIRECT_URI = "https://auth.expo.io/@michelmarques/apptcc";
            const SCOPE = encodeURI("profile email");
            const RESPONSE_TYPE = "token";

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl });

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userinfo = await response.json();
                setUser({
                    email: userinfo.email,
                    name: userinfo.given_name,
                    id: userinfo.id
                })
                navigation.navigate("Home")
            } else {
                navigation.navigate("Login")
            }



        } catch (error) {
            console.log(error)
        }
    }

    function singIn() {
        handleGoogleSignIn();
    }

    return (
        <AuthContext.Provider value={{ singIn, user }} >
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider;