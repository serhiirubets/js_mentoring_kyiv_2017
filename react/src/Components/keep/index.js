import React from 'react';
import PropTypes from 'prop-types';

const onClick = ({ remove, id }) => {
  remove(id);
};

const Keep = props => (
  <article className="list-group-item">
    <p>
      <a href={`/keeps/${props.id}`}>{props.title}</a>
      <button onClick={() => onClick(props)}>Remove</button>
    </p>
  </article>
);

Keep.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Keep;
