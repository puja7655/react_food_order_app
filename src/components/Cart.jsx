import { useContext } from "react";
import Modal from "../ui/Modal";
import ContextType from "../store/CartContext";
import { currencyFormatter } from '../util/formatting'
import Button from "../ui/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(ContextType)
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => (
        totalPrice + item.quantity * item.price
    ), 0)

    function handleCloseCart() {
        userProgressCtx.hideCart()
    }

    return <Modal cssClass="cart" open={userProgressCtx.progress === 'cart'}>
        <h2>Your cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onIncrease={()=>cartCtx.addItem(item)}
                    onDecrease={()=>cartCtx.removeItem(item.id)} />
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            <Button>Go to Checkout</Button>
        </p>
    </Modal>
}