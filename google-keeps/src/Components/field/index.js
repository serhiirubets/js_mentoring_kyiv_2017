import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Field = props => (
    <input type="text" value={props.text} onInput={(e) => props.onChange(e.target.value)}/>
);

export default Field;
