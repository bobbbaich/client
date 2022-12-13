import React, {ComponentType, useEffect} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {LOGIN_PATH} from "../../router/paths";
import {useLocation, useNavigate} from "react-router";


export default function withAuth<T>(Component: ComponentType<T>) {
    const withAuthComponent = (authProps: Omit<T, 'route'>) => {
        const {route} = useAuthenticator((context) => [context.route]);
        const navigate = useNavigate();
        const location = useLocation();

        useEffect(() => {
            if (route !== 'authenticated') {
                navigate(LOGIN_PATH, {state: {from: location}});
            }
        }, [route]);

        return (
            <Component {...(authProps as T)} route={route}/>
        );
    };
    withAuthComponent.displayName = 'WithAuthComponent';
    return withAuthComponent;
}