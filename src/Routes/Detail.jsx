import React from 'react'
import  '../index.css'
import { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [data,setData] = useState({})
  const [id,setId] = useState()
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const urlSegments = currentUrl.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    const lastSegmentNumber = parseInt(lastSegment, 10);
    console.log("Número de ID:", lastSegmentNumber);
    setId(lastSegmentNumber)
  },[]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (response.ok) {
        const result = await response.json();
        setData(result)
      } else {
        throw new Error('Error al obtener datos de la API');
      }
    } catch (error) {
      console.log(error); ;
    }
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <h1>Detail Dentist id {data.id} </h1>
      <table>
        <thead><th>Name</th><th>Email</th><th>Phone number</th><th>Website</th></thead>
        <tr><td>{data.name}</td><td>{data.email}</td><td>{data.phone}</td><td>{data.website}</td></tr>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail