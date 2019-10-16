
import React from 'react';

// import Home from '../templates';
import About from '../templates/AboutMe';
import Users from '../templates/users';
import Dashboard from "../templates/Dashboard";
import Orders from "../templates/Orders";
import Home from "../templates";


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
        pageTitle: 'Dashboard',
        path: '/Dashboard',
        key: 'Dashboard',
        exact: true,
        main: () => <Dashboard />,
    },
    {
        pageTitle: 'Orders',
        path: '/Orders',
        key: 'Orders',
        exact: true,
        main: () => <Orders />,
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