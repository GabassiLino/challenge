import React from 'react';

import classes from './Poke.module.css';

const Poke = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>{props.sprite}</h3>
    </li>
  );
};

export default Poke;
