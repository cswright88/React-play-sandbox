
import React from 'react';import Home from "../components/templates";


const routes = [
    {
        pageTitle: 'Home',
        path: '/',
        key: 'home',
        icon: null,
        exact: true,
        main: () => <Home />,
    },
];

export default routes;