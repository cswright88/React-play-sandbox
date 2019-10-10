
import React from 'react';

import Home from '../templates';
import About from '../templates/AboutMe';


const routes = [
    {
        pageTitle: 'Home',
        path: '/',
        icon: null,
        exact: true,
        main: () => <Home />,
    },
    {
        pageTitle: 'About',
        path: '/About',
        exact: true,
        main: () => <About />,
    },
];

export default routes;