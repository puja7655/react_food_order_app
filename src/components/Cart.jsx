import { useContext } from "react";
import Modal from "../ui/Modal";
import ContextType from "../store/CartContext";
import { currencyFormatter } from '../util/formatting'
import Button from "../ui/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
    const cartCtx = useContext(ContextType)
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => (
        totalPrice + item.quantity * item.price
    ), 0)

    return <Modal cssClass="cart" open={userProgressCtx.progress === 'cart'}>
        <h2>cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <li key={item.id}>
                    {item.name}-{item.quantity}
                </li>
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-action">
            <Button textOnly>Close</Button>
            <Button>Go to Checkout</Button>
        </p>
    </Modal>
}