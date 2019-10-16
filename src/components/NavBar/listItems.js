import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from "@material-ui/core/Link";
import routes from '../../Routes';



const getRoutes = routes.map((route) => (
    <div key={`routes-${route.key}-parent`}>
        <ListItem button>
            <ListItemIcon>
                {route.icon}
            </ListItemIcon>
            <Link href={route.path} color='textPrimary'>
                <ListItemText primary={route.pageTitle}/>
            </Link>
        </ListItem>
    </div>
));

export const mainListItems = (
    <div>
        {getRoutes}
    </div>
);
