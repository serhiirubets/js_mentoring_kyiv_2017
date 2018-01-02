import React, { Component } from 'react';
import { connect } from 'react-redux';
import Field from '../field';
import { SearchIcon } from '../icons';
import './styles.css';

import { getKeepsByQuery } from '../../actions';
function mapStateToProps() {
  return {
    // keeps: state.keeps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search(payload) {
      dispatch(getKeepsByQuery(payload));
    },
  };
}

@connect(null, mapDispatchToProps)
export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Google Keep</h1>
        <div className="field-wrapper">
          <Field onChange={this.props.search} />
          <SearchIcon onSearch={this.props.search} />
        </div>
      </header>
    );
  }
}
