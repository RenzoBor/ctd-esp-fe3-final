import React from 'react'
import Form from '../Components/Form'
import  '../index.css'
import { useDataContext } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useDataContext();
  return (
    <div className={state.theme === 'dark' ? 'dark' : "light"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact