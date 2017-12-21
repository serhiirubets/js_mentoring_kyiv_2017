import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getKeepById, editKeep } from '../../actions';

import './styles.css';

let id;

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
    editKeep(id, payload) {
      dispatch(editKeep(id, payload));
    }
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class KeepDetails extends Component {
  state = {
    text: '',
    title: '',
    tags: ''
  };

  static propTypes = {
    keep: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      tags: '',
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getKeepById: PropTypes.func.isRequired,
  };

  componentWillMount() {
    id = this.props.match.params.id;
    this.props.getKeepById(id);
  }

  componentWillReceiveProps(nextProps) {
    const { title = '', text = '', tags = '' } = nextProps.keep ? nextProps.keep : null;
    this.setState({
      text,
      title,
      tags
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {text, title, tags} = this.state;

    this.props.editKeep(id, {
      tags,
      text,
      title,
    });

    this.setState({
      message: 'You have saved your keep successfull'
    });
  };

  onChange = (property, value) => {
    this.setState({
      [property]: value,
    })
  };

  render() {
    const { title = '', text = '', tags = [], message = '' } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <h2>{this.state.message}</h2>
        <div className="form-group">
          <label htmlFor="title-field">Title</label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={(e) => this.onChange('title', e.target.value.trim())}
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
            onChange={(e) => this.onChange('text', e.target.value.trim)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tag-field">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tag-field"
            placeholder="Enter tags"
            value={tags}
            onChange={(e) => this.onChange('tags', e.target.value.trim().split(' '))}
          />
          <small className="form-text text-muted">Введите теги через пробел</small>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

