import React from "react";
import m from "./City.module.css"


// export function validate({city}) {
// let clima = {};
//   if (city.weather === Clear) {
//     errors.username = 'Username is required';
//   } else if (!/\S+@\S+\.\S+/.test(input.username)) {
//     errors.username = 'Username is invalid';
//   }
//   if (!input.password ) {
//     errors.password = 'Password is required';
//   } else if (!/(?=.*[0-9])/.test(input.password)) {
//     errors.password = 'Password is invalid';
//   }
//   return errors;
// };






export default function Ciudad({city}) {
    // const [clima, setClima] = React.useState({});
    // setClima (validate({
    //     ...input,
    //     [e.target.name]: e.target.value 
    //   }))
    // let climactual = {`m.${city.weather}`}
    // if(city.weather === Clear){
        // let climactual = 'm.'+city.weather
    // }
    
    // {`m.${city.weather}`}
  
    // console.log(climactual)
    return (
        <div className= {city.weather}>
            {/* {`m.${city.weather}`} */}
                <div className={m.container}>
                    <h2 className={m.titulo}>{city.name}</h2>
                    <div className="info">
                        <div className= {m.texto}>Temperatura: {city.temp} ºC</div>
                        <img className={m.imagen} src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="No se encuentra la imagen" />
                        <ul className={m.texto}>
                            <li>Clima: {city.weather}</li>
                            <li>Viento: {city.wind} km/h</li>
                            <li>Cantidad de nubes: {city.clouds}</li>
                            <li>Latitud: {city.latitud}º</li>
                            <li>Longitud: {city.longitud}º</li>
                     
                        </ul>
                    </div>
            </div>
        </div>
    )
}