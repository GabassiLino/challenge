import React from 'react';

import Poke from './Poke';
import classes from './PokeList.module.css';

const PokeList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.pokes.map(poke => (
        <Poke
          name={poke.name}
          sprite={poke.url.sprites.front_default}
        />
      ))}
    </ul>
  );
};

export default PokeList;


/*import React from 'react'

const PokeList = (props) => {
    return (
        <ul>
            {props.pokes.map((poke) = (
                <Pokes 
                    key={poke.id}
                    name={poke.id}
                />
            ))}
        </ul>
    )
}

export default PokeList
*/