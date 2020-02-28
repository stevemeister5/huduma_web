import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/Team1f.jpg";
import team2 from "../../../assets/img/Team2f.jpg";
import team3 from "../../../assets/img/Team3f.jpg";
import team4 from "../../../assets/img/Team4f.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Star Studded team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Cyprian Moses Makongoro
                <br />
                <small className={classes.smallTitle}>CEO and Astropreneur</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The brains and the driving force behind Huduma+. Cyprian is a born entrepreneur
                  always listening and looking for opportunities to change the world for the better.
                  He is the recipient of multiple awards including the coveted Henry Spurrier Award(2018).
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Eng. Goodluck Asenga
                <br />
                <small className={classes.smallTitle}>CTO and Co-Founder</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The technical side of Huduma+. He is responsible for all the technological marvels
                  brewing in our labs. Experiences in Systems Engineering, Long range communications
                  and Network Development. He is the technical brawn that will make our vision reality.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Dr. Noorali Jiwaji
                <br />
                <small className={classes.smallTitle}>Astronomer and Chief-Advisor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  And experienced Astronomer, current and former chair of many associations dealing with space.
                  Dr. Jiwaji is the perfect advisor to help shape Huduma+ and temper rash ideas. He offers his 
                  expert opinion on ideas and advises on the general planning of proceedings.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                January Magori BSc.
                <br />
                <small className={classes.smallTitle}>Software Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  A graduate of the Dar es Salaam Institute of Technology, January brings expertise in a wide 
                  variety of development matters from system development to app development. His knowledge in AI
                  is of great use in our Comunnity Outreach programs.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
