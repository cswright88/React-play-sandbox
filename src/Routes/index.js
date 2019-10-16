
import React from 'react';
import Home from "../components/templates";
import Campaigns from "../components/templates/campaigns";


const routes = [
    {
        pageTitle: 'Home',
        path: '/',
        key: 'home',
        icon: null,
        exact: true,
        main: () => <Home />,
    },
    {
        pageTitle: 'Campaigns',
        path: '/campaigns',
        key: 'campaigns',
        icon: null,
        exact: true,
        main: () => <Campaigns />,
    },
];

export default routes;