import {useState, useEffect} from "react";
import Card from "../Components/Card";
import  '../index.css'
import { useDataContext } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);
  const {state}=useDataContext();

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('idFavs') || [];
    setFavoritos(favoritosGuardados);
    console.log(favoritos);
  }, []);

  return (
    <div className={state.theme === 'dark' ? 'dark' : "light"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid" >
      {state.data.map(odontologo=>{
   if (favoritos.includes(odontologo.id)){
      return <Card key={odontologo.id} odontologo={odontologo} id={odontologo.id} name={odontologo.name} username={odontologo.username}/>}
  })}
      
      </div>
    </div>
  );
};

export default Favs;
