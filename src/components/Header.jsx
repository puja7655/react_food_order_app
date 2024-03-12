import logoImg from '../assets/logo.jpg'
import Button from '../ui/Button'

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant menu"></img>
                <h1> ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>cart(0)</Button>
            </nav>
        </header>
    )
}