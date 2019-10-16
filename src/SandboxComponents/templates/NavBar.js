import React from 'react';
import routes from '../Routes';



function Nav() {
    const listRoutes = routes.map((route, i) =>
        <li key={ i } ><a href={route.path}>{route.pageTitle}</a></li>
    );

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