import React from 'react'
import { priceFormater } from '../utils/priceFormater'

const Card = ({meal}) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <div>
        <h3>{meal.name}</h3>
        <p className='meal-item-price'>{priceFormater.format(meal.price)}</p>
        <p className='meal-item-description'>{meal.description}</p>
      </div>
        <button className='meal-item-actions'>Add to Cart</button>
      </article>
    </li>
  )
}

export default Card
