import React from 'react'
import Card from '../Components/Card'
import '../index.css'
import { useDataContext } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDataContext();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map(item=>(
          <Card key={item.id} id={item.id} name={item.name} username={item.username}/>
        ))}


      </div>
    </main>
  )
}

export default Home