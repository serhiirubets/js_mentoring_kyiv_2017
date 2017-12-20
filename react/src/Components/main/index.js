import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Field from '../field';
import Button from '../button';
import KeepList from '../keep-list';

import { saveKeep } from '../../actions';

import './styles.css';

function mapStateToProps() {
  return {
    // keeps: state.keeps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add(payload) {
      dispatch(saveKeep({ title: payload }));
    },
  };
}


@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
  };

  state = {
    text: '',
  };

  onChange = (text) => {
    this.setState({ text });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <main>
        <form onSubmit={this.onSubmit} className="search-field">
          <Field onChange={this.onChange} text={this.state.text} />
          <Button type="submit">Add</Button>
        </form>

        <KeepList />
      </main>
    );
  }
}
