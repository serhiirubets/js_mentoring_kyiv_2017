import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteKeep, receiveAllKeeps, addToFavorites } from '../../actions';

import Keep from '../keep';
import './styles.css';

function mapStateToProps(state) {
  return {
    keeps: state.keeps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    remove(payload) {
      dispatch(deleteKeep(payload));
    },
    recieveAllKeeps() {
      dispatch(receiveAllKeeps());
    },
    addToFavorites(payload) {
      dispatch(addToFavorites(payload));
    }
  };
}


@connect(mapStateToProps, mapDispatchToProps)
export default class KeepList extends Component {
  static propTypes = {
    recieveAllKeeps: PropTypes.func.isRequired,
    keeps: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })).isRequired,
    remove: PropTypes.func.isRequired,
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
              key={item._id}
              title={item.title}
              text={item.text}
              remove={this.props.remove}
              addToFavorites={this.props.addToFavorites}
              id={item._id}
              favorite={item.favorite}
            />
          ))
        }
      </section>
    );
  }
}
