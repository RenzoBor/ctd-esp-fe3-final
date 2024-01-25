import {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import  '../index.css'
import DentistContext from "../context";

const Card = () => {
  const {state,setData} = useContext(DentistContext)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (response.ok) {
          const result = await response.json();
          setData(result); // Actualizar el estado global con los datos de la API
        } else {
          throw new Error('Error al obtener datos de la API');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchData();
  }, [setData]); 
  

  return (
    <Link to={"/"}>
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <ul>
          {state.data.map(dentist=>(
            <li key={dentist.id}>
        <img src="../../public/images/doctor.jpg" alt="Doctor image" />
        <p>{dentist.name}</p>
        <p>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
        </li>
          )
          )
          }
        </ul>
    </div>
    </Link>
  );
};

export default Card;
