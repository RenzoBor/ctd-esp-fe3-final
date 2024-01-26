import React from 'react';
import {Link} from 'react-router-dom';
import  '../index.css'
import { useDataContext } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,dispatch} = useDataContext();
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={state.theme === 'dark' ? 'dark' : "light"}>

      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/favs'}>Favs</Link>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar