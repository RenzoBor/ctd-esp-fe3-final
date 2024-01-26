
import { Link } from "react-router-dom";
import  '../index.css'
import { useDataContext } from "./utils/global.context";
import doctorImage from './utils/doctor.jpg'

const Card = (props) => {
const {state} = useDataContext();

  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage


  }
  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={""}>
        <img className="doctorImg" src={doctorImage} alt="Doctor" />
        </Link>
      <p>{props.name}</p>
      <p>{props.username}</p>
      <button className="favButton">add Fav</button>        
    </div>
    
  );
};

export default Card;
