import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/common/store';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import './index.css';
import {routes} from "./router/routes";
import {Authenticator} from '@aws-amplify/ui-react';
import {Amplify} from "aws-amplify";
import {COGNITO} from "./config/aws";

const container = document.getElementById('root')!;
const root = createRoot(container);
const router = createBrowserRouter(routes);

Amplify.configure({
    aws_cognito_region: COGNITO.REGION,
    aws_user_pools_id: COGNITO.USER_POOL_ID,
    aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
});


root.render(
    <Authenticator.Provider>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </Authenticator.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
