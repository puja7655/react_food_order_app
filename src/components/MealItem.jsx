import { currencyFormatter } from '../util/formatting'
import Button from '../ui/Button'
import { useContext } from 'react'
import ContextType from '../store/CartContext'

export default function MealItem({ meal }) {

    const cartCtx = useContext(ContextType) // now cartCtx will have access to all the properties in CartContextProvider

    function handleAddMealToCart() {
        cartCtx.addItem(meal)
    }

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">
                    {currencyFormatter.format(meal.price)}
                </p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-action">
                <Button onClick={handleAddMealToCart}>Add to cart</Button>
            </p>
        </article>
    </li>
}