import React from 'react'
import { priceFormater } from '../utils/priceFormater'
import Button from './UI/Button'
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
        <Button className='meal-item-actions'>Add to Cart</Button>
      </article>
    </li>
  )
}

export default Card
