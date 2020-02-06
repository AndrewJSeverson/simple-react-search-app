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
import { removeSuccess } from '../../../redux/success/actions';

import styles from './styles';

const useStyles = makeStyles(styles);

export const SuccessContainerComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // redux state
  const { successMessages } = useSelector((state) => state.success);

  // passed in props
  const { successTimeout } = props;

  return (
    <div>
      {
        successMessages.map((success) => {
          const close = () => {
            dispatch(removeSuccess(success.id));
          };
          if (success.dismissable) {
            setTimeout(close, successTimeout);
          }

          return (
            <Snackbar
              data-testid="success-snackbar-container"
              key={success.id}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open
              onClose={close}
            >
              <SnackbarContent
                className={classes.snackbar}
                aria-describedby="message-id"
                message={(
                  <span id="message-id" className={classes.message}>
                    <Icon className={classes.icon}>check_circle</Icon>
                    {success.message}
                  </span>
                )}
                action={[
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={close}
                    data-testid="success-snackbar-close-button"
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

SuccessContainerComponent.propTypes = { successTimeout: PropTypes.number };

SuccessContainerComponent.defaultProps = { successTimeout: 7000 };

export default SuccessContainerComponent;

