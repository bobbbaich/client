import React from 'react';

import Rewards from "../feature/reward/Rewards";
import SignIn from "../feature/signin/SignIn";
import App from "../App";
import {HOME_PATH, REWARDS_PATH, SIGN_IN_PATH} from "./paths";

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
        path: SIGN_IN_PATH,
        element: <SignIn/>,
    }
];
