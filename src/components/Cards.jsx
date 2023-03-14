import React from 'react';
import Card from './Card';
import c from './Cards.module.css'

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={c.panel}>
        {cities.map(c => <Card
            temp={c.temp}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}