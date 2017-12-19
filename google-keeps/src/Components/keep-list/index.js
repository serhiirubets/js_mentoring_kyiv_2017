import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addKeep, removeKeep } from '../../actions';

import Keep from '../keep';
import './styles.css';

function mapStateToProps(state) {
  debugger
  return {
    keeps: state.keeps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add(payload) {
      dispatch(addKeep(payload));
    },
    remove(payload) {
      dispatch(removeKeep(payload))
    }
  };
}



@connect(mapStateToProps, mapDispatchToProps)
export default class KeepList extends Component {
  static propTypes = {

  };

  render() {
    return (
      <section className="list-group">
        {
          this.props.keeps.map(item => (
            <Keep
              key={Date.now() + item.title}
              title={item.title}
              text={item.text}
              remove={this.props.remove}
              id={item.id}
            />
          ))
        }
      </section>
    );
  }
}
