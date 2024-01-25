import React from "react";
import  '../index.css'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input type="text" value="" placeholder="Your name"/>
        <input type="email" value="" placeholder="Your email"/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
};

export default Form;
