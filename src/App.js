import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Ciudad from './components/City';


function App() {
 
  function onClose(id){
    setCities(oldCities => oldCities.filter(c=> c.id !== id));
  }

  const [cities, setCities] = useState([]);
  const apikey = "6b533116da6ab58e8391dfb75c9c8a73";
  function onSearch(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then(response => response.json())
    .then(recurso => {
    if(recurso.main !== undefined){
      const city = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: Math.round(recurso.main.temp),
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };
      setCities(oldCities => [...oldCities, city]);
    }else{
      alert("Ciudad  no encontrada");
    }
})
.catch(e => console.log(e));
  }


  function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }

  return (
    
    <div className="App">
      {/* <switch> */}
      <Route path={'/'}  render={() =>
        <div className='barra'>
          <Nav  onSearch={onSearch}/> 
        </div>
      }/>
       <Route exact path={'/'}  render={() =>
        <div>
           <Cards cities={cities} onClose={onClose} />
        </div>
       }/>

      <Route path='/ciudad/:ciudadId' render={({match}) => <Ciudad climactual = {match.params.weather} city={onFilter(match.params.ciudadId)}/>}/>
      {/* </switch> */}
    </div>
  );
}
export default App;
    // <div className="App">
    //     <div className='barra'>
    //     <Nav  onSearch={onSearch}/>
    //     <h2 className= "nombre">ClimApp 
    //     <h4 className= 'byJavi'>by JaviPeder</h4></h2>
    //     </div>
    //     <div>
    //     <hr></hr>
    //     <Cards cities={cities} onClose={onClose} />
    //     </div>
    //   </div>


    //  <div className="App">
//   <Route path='/' render={() => <Nav onSearch={onSearch} />}/>
//   <Route path= '/' render={() => <Cards cities={cities} onClose={onClose} />}/>
//   <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
// </div>

    // <div className="App">
    //   <Route path='/' render={() =>
    //     <div className='barra'>
    //       <Nav  onSearch={onSearch}/>
    //     </div>}/>
    //   <Route path= '/' render={() => <Cards cities={cities} onClose={onClose} />}/>
    //   <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
    //  </div>