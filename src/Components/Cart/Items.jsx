import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom'
function Items() {
  return (
    <>
    <div className='item'>
    <div className="image"><Link to ='/item'><img src='../flowes/1.jpg'/></Link></div>
    <h4>Цветочная композиция Розы и Гербена</h4>
    <p>4 400 руб.</p>
  <div className='btnWrapper'><div className='plus'><img src="../image/plus.svg" alt=""  /></div><label>Добавить в корзину</label></div>  
  </div>


  
</>
  )
}

export default Items