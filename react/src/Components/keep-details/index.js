import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getKeepById } from '../../actions';

function mapStateToProps(state) {
  return {
    keep: state.keep,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getKeepById(id) {
      dispatch(getKeepById(id));
    },
  };
}


@connect(mapStateToProps, mapDispatchToProps)
export default class KeepDetails extends Component {
  static propTypes = {
    keep: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.string.isRequired,
    }).isRequired,
    getKeepById: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getKeepById(id);
  }

  render() {
    const { title } = this.props.keep;
    return (
      <article>
        <h1>{title}</h1>
      </article>
    );
  }
}
