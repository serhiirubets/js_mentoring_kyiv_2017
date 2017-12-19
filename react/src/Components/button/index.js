import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = props => (
  <button
    className="btn btn-success"
    type={props.type}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: true,
};

export default Button;
