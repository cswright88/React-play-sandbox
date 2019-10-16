import React from 'react';
// import Chart from "../../SandboxComponents/templates/Chart";
// import Deposits from "../../SandboxComponents/templates/Deposits";
// import Orders from "../../SandboxComponents/templates/Orders";
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment, login} from "../../actions";
import Button from '@material-ui/core/Button';
import useStyles from '../CSS/useStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import NavBar from "../NavBar/NavBar";
import clsx from "clsx";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



function Home() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    const classes = useStyles();


    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    return (
        <div className={classes.root}>
            <NavBar/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <h1>home</h1>
                                <Button variant="contained" color="primary" onClick={() => dispatch(decrement(1))}>-</Button>
                                <Button variant="contained" color="primary" onClick={() => dispatch(increment(1))}>+</Button>
                                <h2>counter {counter}</h2>

                                <Button variant="contained" color="primary" onClick={() =>dispatch(login())}>sign in</Button>
                                {!isLogged ? <h2>not logged in</h2> : <h2>logged in</h2>}
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <h1>home</h1>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h1>home</h1>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Copyright />
            </main>
        </div>
    );
}

export default Home;