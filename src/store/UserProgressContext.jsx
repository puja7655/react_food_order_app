import { createContext ,useState} from "react";

const UserProgressContext = createContext({
    progress: '',//cart,checkout
    showCart: () => { },
    hideCart: () => { },
    chowCheckout: () => { },
    hideCheckout: () => { }
})

export function UserProgressContextProvider({ children }) {
    const [userProress, setUserProgress] = useState('')

    function showCart() {
        setUserProgress('cart')
    }

    function hideCart() {
        setUserProgress('')
    }

    function showCheckout() {
        setUserProgress('checkout')
    }

    function hideCheckout() {
        setUserProgress('')
    }

    const userProgressCtx = {
        progress: userProress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    console.log("userprogress",userProgressCtx)
    return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext