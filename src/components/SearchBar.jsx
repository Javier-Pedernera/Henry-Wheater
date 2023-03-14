import React, { useState } from 'react';
import sb from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form className={sb.buscador} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        className={sb.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={sb.botonagregar} type="submit" value='Agregar' />
    </form>
  );
}