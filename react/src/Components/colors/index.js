import React from 'react';
import './styles.css';

const colorsList = ['red', 'yellow', 'green', 'blue'];

const changeColor = (target, onChange) => {
  onChange(target.value);
};

const getColorsElements = ({ onChange, checked }) => (
  <section className="colors">
    {
      colorsList.map(color => (
        <div className="color-wrapper" key={color}>
          <input
            className={`color color--${color}`}
            id={color} type="radio"
            onChange={(e) => changeColor(e.target, onChange)}
            checked={color === checked}
            value={color}
          />
          <label className={`label label--${color}`} htmlFor={color} />
        </div>
      ))
    }
  </section>
);

export default (props) => getColorsElements(props);

