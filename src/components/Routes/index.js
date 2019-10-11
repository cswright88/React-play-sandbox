
import React from 'react';

import Home from '../templates';
import About from '../templates/AboutMe';
import users from '../templates/users';


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
    {
        pageTitle: 'Users',
        path: '/users',
        exact: true,
        main: () => <users />,
    },
];

export default routes;