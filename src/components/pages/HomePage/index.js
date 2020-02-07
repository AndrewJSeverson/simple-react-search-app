import React from 'react';
import {
  makeStyles,
  Grid,
} from '@material-ui/core';

import SearchArea from './components/SearchArea';
import SearchResultsList from './components/SearchResultsList';

import styles from './styles';

const useStyles = makeStyles(styles);

const HomePage = () => {
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
      <Grid container item justify="center">
        <SearchArea />
      </Grid>
      <Grid container item justify="center">
        <SearchResultsList />
      </Grid>
    </Grid>
  );
};

export default HomePage;
