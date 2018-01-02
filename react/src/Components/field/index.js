import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Field = ({ onChange, text }) => (
  <input
    type="text"
    placeholder={text}
    onInput={e => onChange(e.target.value)}
  />
);

Field.propTypes = {
  text: PropTypes.string,
  //onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  text: 'Enter text here',
};

export default Field;
