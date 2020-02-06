import React from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import { makeStyles } from '@material-ui/core';
import {
  withRouter,
  Switch,
} from 'react-router-dom';

// widgets
import NavBar from '../widgets/NavBar';
import Route from '../widgets/Route';
import ErrorContainer from '../widgets/ErrorContainer';
import SuccessContainer from '../widgets/SuccessContainer';

// reduces
import { welcomeUser } from '../../redux/welcome/actions';

// utils
import pages from '../../utils/pages';

import './styles.scss';
import styles from './styles';

const useStyles = makeStyles(styles);

export const AppComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // redux state
  const { hasBeenWelcomed } = useSelector((state) => state.welcome);

  // let's welcome our guest
  if (!hasBeenWelcomed) {
    dispatch(welcomeUser());
  }

  return (
    <div className={classes.root}>
      <ErrorContainer />
      <SuccessContainer />
      <main
        role="main"
        className={classes.contentWithtMenu}
      >
        <NavBar />
        <Switch>
          {
              pages.map(({
                exact = true,
                path = '/',
                title = 'Pingum',
                description = '',
                ...rest
              }) => (
                <Route
                  key={path}
                  exact={exact}
                  path={path}
                  title={title}
                  description={description}
                  {...rest}
                />
              ))
            }
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(AppComponent);
