import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getKeepById } from '../../actions';

function mapStateToProps(state, props) {
  console.log(props);
  return {
    keep: state.keep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add(payload) {
      // dispatch(addKeep(payload));
    },
    getKeepById(id) {
      dispatch(getKeepById(id))
    }
  };
}



@connect(mapStateToProps, mapDispatchToProps)
export default class KeepDetails extends Component {
  static propTypes = {

  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getKeepById(id);
  }

  render() {
    return (
      <article>
        <h1>{this.props.keep.title}</h1>
      </article>
    );
  }
}
