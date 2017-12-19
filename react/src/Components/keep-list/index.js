import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { saveKeep, removeKeep, receiveAllKeeps } from '../../actions';

import Keep from '../keep';
import './styles.css';

function mapStateToProps(state) {
  return {
    keeps: state.keeps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add(payload) {
      dispatch(saveKeep(payload));
    },
    remove(payload) {
      dispatch(removeKeep(payload));
    },
    recieveAllKeeps() {
      dispatch(receiveAllKeeps())
    }
  };
}


@connect(mapStateToProps, mapDispatchToProps)
export default class KeepList extends Component {
  static propTypes = {

  };

  componentDidMount() {
    this.props.recieveAllKeeps();
  }

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
              id={item._id}
            />
          ))
        }
      </section>
    );
  }
}
