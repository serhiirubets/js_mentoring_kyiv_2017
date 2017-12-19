import React from 'react';

const Keep = props => (
  <article className="list-group-item">
    <input type="text" value={props.title}/>
  </article>
);

export default Keep;
