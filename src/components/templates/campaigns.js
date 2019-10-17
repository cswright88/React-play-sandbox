import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CampaignList from "./CampaignList";
import useStyles from "../CSS/useStyles";


function Campaigns() {
    const classes = useStyles();
    return (
        <div>
            <h1>campaigns</h1>

            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <CampaignList/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Campaigns;