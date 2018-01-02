import React from 'react';
import './styles.css';

const SearchIcon = () => (
  <i className="icon fa fa-search" aria-hidden="true" />
);

const HeartIcon = ({full}) => (
  <i className={`fa fa-heart ${full}`} aria-hidden="true" />
);

export { SearchIcon, HeartIcon };
