import React from 'react'
import '../index.css'
import { useDataContext } from './utils/global.context';
const Footer = () => {
  const {state} = useDataContext();
  return (
    <footer className={state.theme === 'dark' ? 'dark' : "light"}>
        <p>Page made by Renzo Borraccini</p>
    </footer>
  )
}

export default Footer
