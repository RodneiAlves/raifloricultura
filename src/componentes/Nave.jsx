import React from 'react'
import {Link} from 'react-router-dom'
import style from "./Nave.module.css"
const Nave = () => {
  return (
<nav className={style.navbar}>

  <ul className={style.ul}>
    <li className={style.list}>Flores</li>
   <ul className={style.submenu}>
    <li><Link className={style.ul1} to='/'>Home</Link></li>
    <li><Link className={style.ul1} to='/vazos/'>Vasos</Link></li>
    <li><Link className={style.ul1} to='/Sobre/'>Sobre</Link></li>
    </ul>
    
  </ul>
  <ul className={style.ul}>
    <li className={style.list}>Vasos</li>
    <ul className={style.submenu}>
    <li><Link className={style.ul1} to='/'>Home</Link></li>
    <li><Link className={style.ul1} to='/vazos/'>Vasos</Link></li>
    <li><Link className={style.ul1} to='/Sobre/'>Sobre</Link></li>
    </ul>
    
  </ul>

</nav>

  )
}

export default Nave;