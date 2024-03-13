import Header from "./components/Header";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from './store/CartContext.jsx'

// wrapping CartContextProvider here so the all the components and its child component can have the access to conntext and its properties
function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
