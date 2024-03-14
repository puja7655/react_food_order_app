import Header from "./components/Header";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from './store/CartContext.jsx'
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from './components/Cart.jsx'
import Checkout from "./components/Checkout.jsx";

// wrapping CartContextProvider here so the all the components and its child component can have the access to conntext and its properties
function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart/>
      <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
