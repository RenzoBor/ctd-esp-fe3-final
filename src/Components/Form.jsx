import { useState } from 'react';
import  '../index.css';
import { useDataContext } from './utils/global.context';
const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] =useState("");
  const [error, setError] = useState([])
  const {state} = useDataContext();
  //Aqui deberan implementar el form completo con sus validaciones
  function handleName(e) {
    setName(e.target.value)
  } 
  function handleMail(e){
    setMail(e.target.value)
  }

  const manageSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z\s]+$/;
    if(!name || !mail){
      setError(<p className='error'>Los campos deben estar completos.</p>)
    } else if (!regex.test(name))
    {setError(<p className='error'>El nombre solo debe contener letras.</p>)}
  else if (name.length > 30||mail.length>30){
    setError(<p className='error'>Los campos deben ser de menos de 30 caracteres.</p>)
  }else if(name.length < 5){
    setError(<p className='error'>El nombre debe ser mayor a 5 caracteres.</p>)
  } else {setError(<p>Gracias por registrarte {name}, nos contactaremos con usted en la brevedad.</p>)}
  }
  return (
    <div className={state.theme === 'dark' ? 'dark' : "light"} >
      <form onSubmit={manageSubmit}>
        <input type="text"  placeholder="Your name" onChange={handleName}/>
        <input type="email"  placeholder="Your email" onChange={handleMail}/>
        <input type="submit" value="Send"/>
        <section>{error}</section>
      </form>
    </div>
  );
};

export default Form;
