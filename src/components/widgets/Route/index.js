import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class RouteComponent extends React.Component {
  render() {
    const {
      title,
      description,
      ...rest
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>
            {title}
          </title>
          {
            description
              && <meta name="description" content={description} />
          }
        </Helmet>
        <Route {...rest} />
      </div>
    );
  }
}

RouteComponent.propTypes = {
  component: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

RouteComponent.defaultProps = {
  component: () => {},
  title: '',
  description: '',
  exact: false,
  path: '',
};

export default RouteComponent;
