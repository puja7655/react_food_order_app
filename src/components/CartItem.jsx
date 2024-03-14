import { currencyFormatter } from "../util/formatting"

export default function CartItem({name, quantity, price, onIncrease, onDecrease }) {

    //we can increase and decrease the value by usning context but instaed to keep the code leaner i have resued the cartCtx inCart item and used them here as porp
    // const cartCtx = useContext(ContextType)
    // function handleRemoveItem() {
    //     cartCtx.removeItem(item.id);
    // }

    // function handleAddItem() {
    //     cartCtx.addItem(item)
    // }

    return <div>
        <li className="cart-item">
            <p>
                {name}-{quantity}*{currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    </div>
}