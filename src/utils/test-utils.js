import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import configureStore from '../redux/configureStore';

export const renderWithRedux = (
  ui,
  {
    state, store = configureStore(state),
  } = {},
) => {
  const data = ({
    ...render(<Suspense fallback={<div />}><Provider store={store}><Router>{ui}</Router></Provider></Suspense>),
    store,
  });
  return data;
};
