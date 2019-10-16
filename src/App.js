import React from 'react';
import GeneratedRoutes from './GeneratedRoutes';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import useStyles from "./components/CSS/useStyles";


function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Router>
                    <GeneratedRoutes key="all-routes"/>
                </Router>
            </main>
        </div>
    );
}

export default App;
