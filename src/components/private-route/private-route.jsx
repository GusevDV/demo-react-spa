import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Route as RoutePath} from "../../const.js";
import {getAuthStatus} from '../../reducer/user/selectors.js';

const PrivateRoute = (props) => {
  const {render, path, exact, isAuthorized} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return isAuthorized ? render() : <Redirect to={RoutePath.LOGIN} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
