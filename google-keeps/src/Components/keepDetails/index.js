import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  console.log(props);
  return {
    keeps: state.keeps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add(payload) {
      // dispatch(addKeep(payload));
    },
  };
}



@connect(mapStateToProps, mapDispatchToProps)
export default class KeepDetails extends Component {
  static propTypes = {

  };

  render() {
    return (
      <article>
        <h1>hi</h1>
      </article>
    );
  }
}
