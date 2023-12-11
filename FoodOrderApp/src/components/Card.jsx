import React from 'react'
import { priceFormater } from '../utils/priceFormater'
import Button from './UI/Button'
import { CartContext } from './store/CartContext'
import { useContext } from 'react'

const Card = ({meal}) => {

  const cartCxt = useContext(CartContext)

  function handleAddToCart() {
    cartCxt.addItem(meal)
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <div>
        <h3>{meal.name}</h3>
        <p className='meal-item-price'>{priceFormater.format(meal.price)}</p>
        <p className='meal-item-description'>{meal.description}</p>
      </div>
        <Button onClick={handleAddToCart}className='meal-item-actions'>Add to Cart</Button>
      </article>
    </li>
  )
}

export default Card
