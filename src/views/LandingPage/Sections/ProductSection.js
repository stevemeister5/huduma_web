import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Process</h2>
          <h5 className={classes.description}>
            Our Product is called AngaNet, and it is ambitious. We envision a Network that enables
            data sharing for Low Earth Orbit satelittes. Our Network will allow the sharing of information 
            at low cost and with minimal resources. It will be able to provide global
            real-time coverage at a 1000 times less the cost of conventional approaches like Starlink(SpaceX).
            So How will we do this?? It is separated into phases.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Phase 1: Prototyping"
              description="Phase 1 involves the development of a robust prototype in our Huduma labs. This prototype will be built to exacting standards"
              icon={Filter1Icon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Phase 2: Testing"
              description="Phase 2 involves rigorous testing of our prototype solution. This can range from stress tests to microlaunches into lower orbit"
              icon={Filter2Icon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Phase 3: Deployment"
              description="Phase 3 is the final phase. It involves deployment of ANGANET and scaling up to the point where we have a full real time coverage of the earth"
              icon={Filter3Icon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
