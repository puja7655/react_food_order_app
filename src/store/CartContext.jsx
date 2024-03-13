import { createContext, useReducer } from "react";

const ContextType = createContext({
    item: [],
    addItem: (item) => { },
    removeItem: (id) => { }
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCratItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id);

        const updateItems = [...state.items] //List of all items present
        if (existingCratItemIndex > -1) {
            //If the item is already present i want to increase the quantity .
            const existingItem = state.items[existingCratItemIndex]
            const updatePresentItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updateItems[existingCratItemIndex] = updatePresentItem
        } else {
             updateItems.push({ ...action.item, quantity: 1 })
        }

        return { ...state, items: updateItems }
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCratItemIndex = state.items.findIndex(
            (item) => item.id === id);
        const existingCartItem = state.items[existingCratItemIndex]
        const updateItems = [...state.item]

        if (state.item[existingCratItemIndex] === 1) {
            updateItems.splice(existingCratItemIndex, 1)
        } else {
            //If the item is already present i want to decrease the quantity .
            const updatePresentItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updateItems[existingCratItemIndex] = updatePresentItem;
            return { ...state, items: updateItems }
        }
    }
    return state
}

export function CartContextProvider({ children }) {
    const [cartState, dispatchCartItem] = useReducer(cartReducer, { items: [] })

    function addItem(item) {
        dispatchCartItem({ type: 'ADD_ITEM', item })
    }

    function removeItem(id) {
        dispatchCartItem({ type: 'REMOVE_ITEM', id })
    }

    const cartContext = {
        items: cartState.items,
        addItem,
        removeItem
    }

    console.log("cart",cartContext)

    /** now with value={catContext} all component consuming ContextType will have access to cartContext and through that
     *  will have access to add and remove functionality wich we added using reducer.
     *  we will wrap the CartContextProvider component around all the components who are interested in receiving the value i.e cartContext
     *  in our case we will wrap it in app comonent so that the componenets and all the nested componenets can have the access
    */

    return <>
        <ContextType.Provider value={cartContext}>{children}</ContextType.Provider>
    </>
}

export default ContextType;