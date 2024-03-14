import { useContext } from "react"
import ContextType from "../store/CartContext"
import UserProgressContext from '../store/UserProgressContext'
import { currencyFormatter } from "../util/formatting"
import Input from "../ui/Input"
import Button from "../ui/Button"
import Modal from "../ui/Modal"

export default function Checkout() {
    const cartCtx = useContext(ContextType);
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => (
        totalPrice + item.quantity * item.price
    ), 0)

    function handleCloseButton() {
        userProgressCtx.hideCheckout()
    }
    return (
        <Modal
            className="modal"
            open={userProgressCtx.progress === 'checkout'}
            onClose={userProgressCtx.progress === 'checkout' ? handleCloseButton : null}>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full-Name" id="full-name" type="text"></Input>
                <Input label="E-mail Address" id="email" type="email"></Input>
                <Input label="Street" id="street" type="text"></Input>
                <div className="control-row">
                    <Input label="Postal code" id="postal-code" type="text"></Input>
                    <Input label="City" id="city" type="text"></Input>
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleCloseButton}>Close</Button>
                    <Button type="button">Submit Order</Button>
                </p>
            </form>
        </Modal>
    )

}