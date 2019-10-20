
import React from 'react';
import Home from "../components/templates";
import Campaigns from "../components/templates/campaigns";
import About from "../SandboxComponents/templates/AboutMe";
import Orders from "../SandboxComponents/templates/Orders";
import Users from "../SandboxComponents/templates/users";
import OldHOme from "../SandboxComponents/templates/index";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Pokemon from "../components/templates/pokemon";

const routes = [
    {
        pageTitle: 'Home',
        path: '/',
        key: 'home',
        icon: <DashboardIcon/>,
        exact: true,
        main: () => <Home />,
    },
    {
        pageTitle: 'OldHome',
        path: '/OldHome',
        key: 'OldHome',
        icon: <ShoppingCartIcon/>,
        exact: true,
        main: () => <OldHOme />,
    },
    {
        pageTitle: 'Campaigns',
        path: '/campaigns',
        key: 'campaigns',
        icon: <PeopleIcon/>,
        exact: true,
        main: () => <Campaigns />,
    },
    {
        pageTitle: 'About',
        path: '/About',
        key: 'about',
        icon: <BarChartIcon/>,
        exact: true,
        main: () => <About />,
    },
    {
        pageTitle: 'Orders',
        path: '/Orders',
        key: 'Orders',
        icon: <DashboardIcon/>,
        exact: true,
        main: () => <Orders />,
    },
    {
        pageTitle: 'Users',
        path: '/users',
        key: 'users',
        icon: <LayersIcon/>,
        exact: true,
        main: () => <Users />,
    },
    {
        pageTitle: 'Pokemon',
        path: '/Pokemon',
        key: 'pokemon',
        icon: <LayersIcon/>,
        exact: true,
        main: () => <Pokemon />,
    },
];

export default routes;