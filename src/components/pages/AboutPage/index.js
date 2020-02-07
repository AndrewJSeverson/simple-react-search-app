import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const AboutPage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      lg={9}
      xl={7}
      justify="center"
      alignItems="center"
      className={classes.pageContainer}
    >
      <div className={classes.card}>
        <Grid container item justify="center">
          <Typography component="h1" variant="h1" className={classes.pageTitle} gutterBottom>
              About Simple React Search App
          </Typography>

          <Typography variant="body1" gutterBottom className={classes.subtitle}>
              This application was built to demonstrate modern front-end technologies.
              The seed of the project was generated from <a href="https://github.com/facebook/create-react-app" target="blank">create react app</a>.
              This project and dependency provides an easy starting point for React applications,
              but can include many packages and libraries that end up never being used.
              Webpack should tree shake and remove any and all unused dependencies, so your production
              build won&apos;t have dead weight if kept.
          </Typography>

          <Typography variant="body1" component="div" gutterBottom className={classes.subtitle}>
            <Typography variant="subtitle1" gutterBottom>
              What is included out of the box with create react app?
            </Typography>
            <ul>
              <li>React, JSX, ES6, TypeScript and Flow syntax support.</li>
              <li>Language extras beyond ES6 like the object spread operator.</li>
              <li>Autoprefixed CSS, so you don’t need -webkit- or other prefixes.</li>
              <li>A fast interactive unit test runner with built-in support for coverage reporting.</li>
              <li>A live development server that warns about common mistakes.</li>
              <li>A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.</li>
              <li>
                    An offline-first service worker and a web app manifest, meeting all the Progressive
                    Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)
              </li>
              <li>Hassle-free updates for the above tools with a single dependency.</li>
            </ul>
          </Typography>

          <Typography variant="body1" component="div" gutterBottom className={classes.subtitle}>
            <Typography variant="subtitle1" gutterBottom>
              React Components and Design System
            </Typography>
            For this project I chose to use <a href="https://material-ui.com/" target="blank">Material UI</a>.
            Material ui offers and easy to use component library based off of the google design system.
            This open source project and community has demonstrated their ability to provide high quality,
            easy to use, and well documented solutions.
          </Typography>

          <Typography variant="body1" component="div" gutterBottom className={classes.subtitle}>
            <Typography variant="subtitle1" gutterBottom>
              Redux and Thunk
            </Typography>
            <a href="https://react-redux.js.org/" target="blank">Redux</a> is used to maintain the
            application state. this library is becoming a standard for react applications.
            <a href="https://github.com/reduxjs/redux-thunk" target="blank">Redux coupled with Thunk</a> gives
            us a middleware that allows for asynchronous logic and actions.
          </Typography>
        </Grid>
      </div>
    </Grid>
  );
};

export default AboutPage;
