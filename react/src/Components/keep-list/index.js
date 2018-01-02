import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteKeep, receiveAllKeeps, addToFavorites, addToArchive, receiveArchivedKeeps, receiveKeepsByTags } from '../../actions';

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
    },
    addToArchive(payload) {
      dispatch(addToArchive(payload));
    },
    receiveArchivedKeeps() {
      dispatch(receiveArchivedKeeps());
    },
    receiveKeepsByTags(payload) {
      dispatch(receiveKeepsByTags(payload))
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
    if (this.props.match && this.props.match.url === '/keeps/archive') {
      this.hideElementForArchivePage = true;
      this.props.receiveArchivedKeeps();
      return;
    }
    this.props.recieveAllKeeps();
  }

  showTagList = () => {
    return this.props.keeps.filter(keep => !!keep.tags);
  };

  render() {
    return (
      <section className="list-group">
        <h2>Tags: </h2>
        <ul className="tags">
          <li onClick={this.props.recieveAllKeeps}>show all</li>
          { this.showTagList()
            .map(keepWithtags => (
              <li
                className="tags"
                key={keepWithtags._id}
                onClick={(e) => this.props.receiveKeepsByTags(e.target.textContent)}>{keepWithtags.tags}</li>)
            )
          }
        </ul>
        {
          this.props.keeps.map(item => (
            <Keep
              key={item._id}
              title={item.title}
              text={item.text}
              remove={this.props.remove}
              addToFavorites={this.props.addToFavorites}
              addToArchive={this.props.addToArchive}
              id={item._id}
              favorite={item.favorite}
              color={item.color}
              archived={item.archived}
              isElementsHidden={this.hideElementForArchivePage}
            />
          ))
        }
      </section>
    );
  }
}
