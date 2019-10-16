import React from 'react';
import { Route } from 'react-router-dom';
import * as ControlRoutes from './Routes';

const getRoutes = (routes) => (routes.map((route) => (
    <div key={`routes-${route.path}-parent`}>
        <Route
            key={`routes-${route.pageTitle}`}
            path={route.path}
            exact={route.exact}
            component={route.main}
        />
        {'routes' in route ? getRoutes(route.routes) : null}
    </div>
)));

const GeneratedRoutes = () => {
    const allRoutes = [].concat(
        ControlRoutes.default,
    );

    return <div key="all-routes">{getRoutes(allRoutes)}</div>;
};

export default GeneratedRoutes;