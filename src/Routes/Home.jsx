import React from 'react'
import Card from '../Components/Card'
import '../index.css'
import { Outlet } from 'react-router-dom'
import DataProvider from '../dentistProvider'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <DataProvider>
          <Card/>
        </DataProvider>

      </div>
    </main>
  )
}

export default Home