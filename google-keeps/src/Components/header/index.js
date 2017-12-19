import React from 'react';
import Field from '../field';
import { SearchIcon } from '../icons';
import './styles.css';

const Header = props => (
  <header>
    <h1>Google Keep</h1>
    <div className="field-wrapper">
      <Field />
      <SearchIcon />
    </div>

  </header>
);

export default Header;
