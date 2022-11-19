import React from 'react';

import Rewards from "../component/reward/Rewards";
import App from "../App";
import {HOME_PATH, LOGIN_PATH, REWARDS_PATH} from "./paths";
import {Login} from "../component/auth/Login";

export const routes = [
    {
        path: HOME_PATH,
        element: <App/>,
        children: [
            {
                path: REWARDS_PATH,
                element: <Rewards/>
            }
        ]
    },
    {
        path: LOGIN_PATH,
        element: <Login/>,
    }
];
