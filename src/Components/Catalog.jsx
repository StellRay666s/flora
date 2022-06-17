import React from 'react'
import  '../index.scss'
import Items from './Cart/Items'

export default function Catalog() {
  return (
    <div className='catalogWrapper'>
        <h1>КАТАЛОГ</h1>
        <div className='inputBlock'>
            <select>
                <option>Раздел товаров</option>
                <option>Цветы</option>
                <option>Горшки</option>
                <option>Букеты</option>
            </select>
            <label>От 0 </label><input type="range" min={0} max = {30000} /> <label>До 30000 </label>
            <select>
                <option>Сортировака</option>
                <option>Цена</option>
                <option>Название</option>
                <option>Букеты</option>
            </select>
        </div>
        <div className='items'>
        <Items/>
        </div>
    </div>
  )
}
