import React from 'react';
import Header from './Components/header';
import Main from './Components/main';

import './styles.scss';

export default () => (
  <div className="container jumbotron">
    <Header />
    <Main />
  </div>
);

