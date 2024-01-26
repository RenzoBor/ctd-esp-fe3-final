
import { Link , useParams} from "react-router-dom";
import { useState } from "react";
import  '../index.css'
import { useDataContext } from "./utils/global.context";
import doctorImage from './utils/doctor.jpg'

const Card = (props) => {
const {state} = useDataContext();
const [ids, setIds] = useState(null)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage);
    setIds(JSON.parse(localStorage.getItem("dentistsIds")))
    if(ids){
    setIds([...ids,props.id])} else {setIds([props.id])}
    localStorage.setItem("dentistsIds",JSON.stringify(ids));
  }
  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${props.id}`} key={props.id}>
        <img className="doctorImg" src={doctorImage} alt="Doctor" />
        </Link>
      <p>Dentist nº: {props.id}</p>
      <p>{props.name}</p>
      <p>{props.username}</p>
      <button className="favButton" onClick={addFav}>add Fav</button>        
    </div>
    
  );
};

export default Card;
