import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const NotFoundPage = () => {
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
              Select Your Search
          </Typography>

        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
