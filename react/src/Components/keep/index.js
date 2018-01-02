import React from 'react';
import PropTypes from 'prop-types';
import { HeartIcon } from '../icons';

const onRemove = (remove, id) => {
  remove(id);
};

const onAddToFavorite = (addToFavorites, id) => {
  addToFavorites(id);
};

const onAddToArchive = (addToArchive, id) => {
  addToArchive(id)
};

const renderButtons = (props) => (
  <div className="buttons">
    <button onClick={() => onAddToFavorite(props.addToFavorites, props.id)}>
      <HeartIcon full={props.favorite ? 'fa-heart--full': ''} />
    </button>
    <button onClick={() => onAddToArchive(props.addToArchive, props.id)}>{props.archived ? 'Remove from archive' : 'Archive'}</button>
    <button onClick={() => onRemove(props.remove, props.id)}>Remove</button>
  </div>
);

const Keep = props => (
  <article className={`list-group-item ${props.color ? props.color : ''}`}>
    <p>
      <a href={`/keeps/${props.id}`}>{props.title}</a>
    </p>
    {
      !props.isElementsHidden && renderButtons(props)
    }
  </article>
);

Keep.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Keep;
