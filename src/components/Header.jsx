import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from '../ui/Button'
import ContextType from '../store/CartContext'
import UserProgressContext from "../store/UserProgressContext"

export default function Header() {
    const cartCtx = useContext(ContextType)
    const userProgressCtx=useContext(UserProgressContext)

    //using reduce here as it would calculate all the added items since in the cartlist
    // we are not adding duplicate meal items so simply doing .length would not give the correct meal count
    const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
        return totalNumberofItems + item.quantity
    }, 0)

    function handleShowCart(){
        userProgressCtx.showCart() // sets the value of progress in UserProgressContext to cart
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant menu"></img>
                <h1> ReactFood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>cart({totalCartItems})</Button>
            </nav>
        </header>
    )
}