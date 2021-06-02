import React, {useState, useEffect} from "react";
import Weather from "../weather/Weather";
import "./searchStyles.css";
import {getClimaPorCiudad} from '../../services/servicios';

const Search = () => {

  const [busqueda, setBusqueda] = useState('')
  const [ciudad, setCiudad] = useState('');
  const [pronosticos, setPronosticos] = useState(undefined);

  // console.log(pronosticos);
  // useEffect(()=>{
  //   if (ciudad === '') {
  //     return
  //   }
  //   getClimaPorCiudad(ciudad).then((data) => {
  //     console.log(data);
  //     setPronosticos(data);
  //   })

  // },[ciudad]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCiudad(busqueda.trim());
    getClimaPorCiudad(busqueda.trim()).then(data=> {
      setPronosticos(data);
    })
  }

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  }


  return (
    <div className="searchComponent">
      <h2>Encuentra una ciudad</h2>
      <form id="searchForm" onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" placeholder="Busca tu ciudad" 
          value={busqueda}
          onChange={handleChange}  />
        </div>
      </form>
      {
        pronosticos && <Weather pronosticos={pronosticos}/>
        
      }
    </div>
  );
};

export default Search;
