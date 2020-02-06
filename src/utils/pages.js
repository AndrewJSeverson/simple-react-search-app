import React from 'react';

const HomePage = React.lazy(() => import('../components/pages/HomePage'));
const AboutPage = React.lazy(() => import('../components/pages/AboutPage'));
const NotFoundPage = React.lazy(() => import('../components/pages/NotFoundPage'));

export default [
  {
    path: '/',
    component: HomePage,
    title: 'Simple Search',
    description: 'This is a simple react app that performs a search',
  }, {
    path: '/about',
    component: AboutPage,
    title: 'About',
    description: 'About simple react search app',
  }, {
    path: '',
    component: NotFoundPage,
    title: 'Page Not Found',
    description: 'Oh No! Did you type in a path that does not exist?',
  }];
