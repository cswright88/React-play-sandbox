
import React from 'react';

import Home from '../templates';
import About from '../templates/AboutMe';
import Users from '../templates/users';


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
        pageTitle: 'About',
        path: '/About',
        key: 'about',
        exact: true,
        main: () => <About />,
    },
    {
        pageTitle: 'Users',
        path: '/users',
        key: 'users',
        exact: true,
        main: () => <Users />,
    },
];

export default routes;