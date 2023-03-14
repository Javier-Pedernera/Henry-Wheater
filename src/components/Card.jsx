import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  // acá va tu código
  return(
    <div className={`${s.caja} ${s.caja2
    }`}>
        <button id= 'close' onClick={props.onClose} className={s.boton}>X</button>
        <div className= {`${s.lettercolor} ${s.nombre}`}>

        <Link to={`/ciudad/${props.id}`}>
          <h2 className={s.nombre} >{props.name}</h2>
        </Link>
        </div>
        <hr className={s.linea}/>
        <div className={s.temperatura}>
        <div >
        <p >{`${'Temp.'+ ' ' + props.temp + "°"}`}</p>
        </div>
        <div>
        <img className={s.imagen} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="No se encuentra la imagen" />
        </div>
        </div>
        <hr className={s.linea}/>
        <div className={s.minmax}>
        <p>Min</p>
        <p id = 'min'>{`${props.min + "°"}`}</p>
        </div>
        <div className={s.minmax}>
          <p>Max</p>
        <p id= 'max'> {`${props.max + "°"}`}</p>
        </div> 
    </div>

 )
};