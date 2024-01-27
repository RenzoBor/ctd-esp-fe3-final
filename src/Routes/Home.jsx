import { useState , useEffect} from 'react'
import Card from '../Components/Card'
import '../index.css'
import { useDataContext } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDataContext();
  return (
    <main className={state.theme === 'dark' ? 'dark' : "light"} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map(odontologo=>(
          <Card key={odontologo.id} odontologo={odontologo} id={odontologo.id} name={odontologo.name} username={odontologo.username}/>
        ))}


      </div>
    </main>
  )
}

export default Home