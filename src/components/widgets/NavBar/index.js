import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Toolbar,
  AppBar,
  Typography,
  Button,
} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const NavBarComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Simple Search
        </Typography>
        <Link
          to="/"
          href="/"
          className={classes.link}
        >
          <Button name="about-us" className={classes.button}>
            Home
          </Button>
        </Link>
        <Link
          to="/about"
          href="/about"
          className={classes.link}
        >
          <Button name="about-us" className={classes.button}>
            About
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
