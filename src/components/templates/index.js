import React from 'react';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../../SandboxComponents/templates/Chart";
import Deposits from "../../SandboxComponents/templates/Deposits";
import Orders from "../../SandboxComponents/templates/Orders";
import Container from "@material-ui/core/Container";
import useStyles from "../CSS/useStyles";
import clsx from "clsx";

function Home() {
    const preventDefault = event => event.preventDefault();
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
       <div>
           <h1>index home</h1>
           <Link href="/campaigns" onClick={preventDefault} className='fuck'>
               Link
           </Link>

           <Container maxWidth="lg" className={classes.container}>
               <Grid container spacing={3}>
                   {/* Chart */}
                   <Grid item xs={12} md={8} lg={9}>
                       <Paper className={fixedHeightPaper}>
                           <Chart />
                       </Paper>
                   </Grid>
                   {/* Recent Deposits */}
                   <Grid item xs={12} md={4} lg={3}>
                       <Paper className={fixedHeightPaper}>
                           <Deposits />
                       </Paper>
                   </Grid>
                   {/* Recent Orders */}
                   <Grid item xs={12}>
                       <Paper className={classes.paper}>
                           <Orders />
                       </Paper>
                   </Grid>
               </Grid>
           </Container>

       </div>
    );
}

export default Home;