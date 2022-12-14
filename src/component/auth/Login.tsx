import React, {useEffect} from 'react';

import {Authenticator, useAuthenticator, View} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {useLocation, useNavigate} from 'react-router';
import {HOME_PATH} from "../../router/paths";

export function Login() {
    const {route} = useAuthenticator((context) => [context.route]);
    const location = useLocation();
    const navigate = useNavigate();

    const getFrom = () => location.state?.from?.pathname || HOME_PATH;

    useEffect(() => {
        if (route === 'authenticated') {
            const from = getFrom();
            navigate(from, {replace: true});
        }
    }, [route, navigate]);

    return (
        <View className="auth-wrapper">
            <Authenticator signUpAttributes={['email', 'name']}></Authenticator>
        </View>
    );
}