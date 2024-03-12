import logoImg from '../assets/logo.jpg'

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant menu"></img>
                <h1> ReactFood</h1>
            </div>
            <nav>
                <button>cart(0)</button>
            </nav>
        </header>
    )
}