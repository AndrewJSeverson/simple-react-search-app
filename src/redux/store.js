import configureStore from './configureStore';

const store = configureStore();

export const { dispatch } = store;

export default store;
