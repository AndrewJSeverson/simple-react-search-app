import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';

const NotFoundPage = () => (
  <div style={{ marginTop: '4rem' }}>
    <Typography variant="h1" align="center" gutterBottom>404</Typography>
    <Typography variant="h4" align="center">The page you are looking for does not exist</Typography>
  </div>
);

export default NotFoundPage;
