import React from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import PropTypes from 'prop-types';
import {
  makeStyles,
  IconButton,
  Snackbar,
  SnackbarContent,
  Icon,
} from '@material-ui/core';
import { removeError } from '../../../redux/error/actions';

import styles from './styles';

const useStyles = makeStyles(styles);

export const ErrorContainerComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // redux state
  const { errorMessages } = useSelector((state) => state.error);

  // passed in props
  const { errorTimeout } = props;

  return (
    <div>
      {
      errorMessages.map((error) => {
        const close = () => {
          dispatch(removeError(error.id));
        };
        setTimeout(close, errorTimeout);
        return (
          <Snackbar
            data-testid="error-snackbar-container"
            key={error.id}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open
            onClose={close}
          >
            <SnackbarContent
              className={classes.snackbar}
              aria-describedby="message-id"
              message={(
                <span id="message-id" className={classes.message}>
                  <Icon className={classes.icon}> error </Icon>
                  {error.message}
                </span>
              )}
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={close}
                  data-testid="error-snackbar-close-button"
                >
                  <Icon>close</Icon>
                </IconButton>,
              ]}
            />
          </Snackbar>
        );
      })
    }
    </div>
  );
};

ErrorContainerComponent.propTypes = { errorTimeout: PropTypes.number };

ErrorContainerComponent.defaultProps = { errorTimeout: 7000 };

export default ErrorContainerComponent;
