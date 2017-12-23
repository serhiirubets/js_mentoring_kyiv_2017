import React from 'react';
import PropTypes from 'prop-types';
import { HeartIcon } from '../icons';

const onRemove = (remove, id) => {
  remove(id);
};

const onAddToFavorite = (addToFavorites, id) => {
  addToFavorites(id);
};

const Keep = props => (
  <article className="list-group-item">
    <p>
      <a href={`/keeps/${props.id}`}>{props.title}</a>
      <button onClick={() => onAddToFavorite(props.addToFavorites, props.id)}>
        <HeartIcon full={props.favorite ? 'fa-heart--full': ''} />
      </button>
      <button onClick={() => onRemove(props.remove, props.id)}>Remove</button>
    </p>
  </article>
);

Keep.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Keep;
