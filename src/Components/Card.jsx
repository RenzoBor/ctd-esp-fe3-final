
import { Link , useParams} from "react-router-dom";
import { useEffect } from "react";
import  '../index.css'
import { useDataContext } from "./utils/global.context";
import doctorImage from './utils/doctor.jpg'

const Card = ({odontologo}) => {
const {state,dispatch} = useDataContext();

  const addFav = (id)=>{
    // Aqui iria la logica para agregar la Card en el localStorage);
    if(state.idFavs)
    dispatch({ type: 'ADD_FAV', payload: id})
    localStorage.setItem("idFavs",state.idFavs)
    console.log("Se ha agregado a favoritos el odontologo con el id: "+ id )
}
  
  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${odontologo.id}`} key={odontologo.id}>
        <img className="doctorImg" src={doctorImage} alt="Doctor" />
        </Link>
      <p>Dentist nº: {odontologo.id}</p>
      <p>{odontologo.name}</p>
      <p>{odontologo.username}</p>
      <button className="favButton" onClick={()=>addFav(odontologo.id)}>add Fav</button>        
    </div>
    
  );
};

export default Card;
