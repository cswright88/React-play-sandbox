import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from "@material-ui/core/Link";
import routes from '../../Routes';


const getRoutes = routes.map((route) => (
    <div key={`routes-${route.key}-parent`}>
        <Link href={route.path} color='textPrimary'>
            <ListItem button>
                <ListItemIcon>
                    {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.pageTitle}/>
            </ListItem>
        </Link>
    </div>
));

export const mainListItems = (
    <div>
        {getRoutes}
    </div>
);
