import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getKeepById } from '../../actions';

import './styles.css';

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
  state = {
    text: '',
    title: '',
    tags: []
  };

  static propTypes = {
    keep: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getKeepById: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getKeepById(id);
  }

  componentWillReceiveProps(nextProps) {
    const { title = '', text = '', tags = [] } = nextProps.keep ? nextProps.keep : null;
    this.setState({
      text,
      title,
      tags
    })

  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onInput = (property, value) => {
    this.setState({
      [property]: value,
    })
  };

  render() {
    const { title = '', text = '', tags = [] } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title-field">Title</label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onInput={(e) => this.onInput('title', e.target.value)}
          />
          <small className="form-text text-muted">This is awesome title</small>
        </div>

        <div className="form-group">
          <label htmlFor="text-field">Text</label>
          <input
            type="text"
            className="form-control"
            id="text-field"
            placeholder="Enter text"
            value={text}
            onInput={(e) => this.onInput('text', e.target.value.split(' '))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tag-field">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tag-field"
            placeholder="Enter tags"
            value={tags.join(' ')}
            onInput={(e) => this.onInput('tags', e.target.value.split(' '))}
          />
          <small className="form-text text-muted">Введите теги через пробел</small>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

