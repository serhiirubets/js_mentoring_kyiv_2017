import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './Components/header';
import Main from './Components/main';


import './styles.scss';

function mapStateToProps() {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRegisterSubmit(data) {
      // dispatch(registerRequestAction(data));
    },
    onLogin(data) {
      // dispatch(loginRequestAction(data));
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    onRegisterSubmit: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="container jumbotron">
        <Header />
        <Main />
      </div>
    );
  }
}
