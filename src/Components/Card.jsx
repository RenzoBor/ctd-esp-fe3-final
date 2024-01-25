
import { Link } from "react-router-dom";
import  '../index.css'
import { useDataContext } from "./utils/global.context";


const Card = (props) => {
const {state} = useDataContext();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

  }
  return (
    <Link to={""}>
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
      <img src="" alt="" />
      <p>{props.name}</p>
      <p>{props.username}</p>
      <button className="favButton">add Fav</button>        
    </div>
    </Link>
    
  );
};

export default Card;
