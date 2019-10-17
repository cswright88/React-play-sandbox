import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function CampaignList() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const campaigns = [
        {
            campaign_id: 1234,
            campaign_name: "BayardTestCamp",
            campaign_budget: 500.00,
            campaign_data: "This is some info on the camp",
        },
        {
            campaign_id: 2458,
            campaign_name: "CareerbuilderMain",
            campaign_budget: 1000000.00,
            campaign_data: "This is some info on the camp",
        },
    ];
    const loopThroughCamps = campaigns.map((campaign, key) => (
        <ExpansionPanel expanded={expanded === 'panel' + key} onChange={handleChange('panel' + key)}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>{campaign.campaign_id} - {campaign.campaign_name}</Typography>
                <Typography className={classes.secondaryHeading}>{campaign.campaign_budget}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {campaign.campaign_data}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    ));

    return (
        <div className={classes.root}>
            {loopThroughCamps}
        </div>
    );
}
