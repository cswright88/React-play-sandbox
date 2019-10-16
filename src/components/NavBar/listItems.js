import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Link from "@material-ui/core/Link";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <Link href="/" color='textPrimary'>
                <ListItemText primary="Dashboard"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon/>
            </ListItemIcon>
            <Link href="/" color='textPrimary'>
                <ListItemText primary="Orders"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <Link href="/" color='textPrimary'>
                <ListItemText primary="Customers"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <Link href="/" color='textPrimary'>
                <ListItemText primary="Reports"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <Link href="/" color='textPrimary'>
                <ListItemText primary="Integrations"/>
            </Link>
        </ListItem>
    </div>
);
