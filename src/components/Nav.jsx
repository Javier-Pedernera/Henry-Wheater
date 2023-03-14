import React from 'react';
// import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import nav from './Nav.module.css';
import { Link } from 'react-router-dom';
// import home from '../img/clima.jpg'
// import logo from '../img/clima.jpg'
// import sb from './SearchBar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseChimneyWindow} from '@fortawesome/free-solid-svg-icons'

function Nav({onSearch}) {
  return (
    <div className={nav.Navegador}>
      
      <SearchBar onSearch = {onSearch}/>
          <Link to='/'>
              {/* <h3 className={nav.Home}>Home</h3> */}
              <FontAwesomeIcon icon={faHouseChimneyWindow} className={nav.logo} />
              {/* <image src={home} className={nav.logo} alt="No se encuentra la imagen" /> */}
          </Link>
          
          <h2 className= {nav.nombre}>Clim
          <h2 className= {nav.nombre2}>App
          </h2>
            <h4 className= {nav.byJavi}>by JaviPeder
            </h4>
          </h2>
          {/* <hr className={nav.linea}></hr> */}
          {/* <h1 className={nav.text}>Bienvenido a mi nueva aplicacion del clima!
          Busca tu ciudad y disfruta los datos.
          </h1> */}
    </div>
  );
};

export default Nav;
