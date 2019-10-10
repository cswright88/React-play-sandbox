import React from 'react';
import routes from '../Routes';

const listRoutes = routes.map((route) =>
    <a href={route.path}><li>{route.pageTitle}</li></a>
);

function Nav() {
    console.log(listRoutes);
    return (
        <div>
            <h1>NavBar</h1>
            <ul>
                {listRoutes}
            </ul>
        </div>
    );
}

export default Nav;