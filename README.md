`I will keep on updating the README file as the app progress`

-> creating this app in native react
-> it has a page which renders list of meals which could be added in the cart, meal quantity could be increased and decreased and the payment checkout page is available
-> there is dummy backend as well whichi using the get my data from and push my data into

implementation way
->components - contains list of all componenets
->store -> contains context api
->ui - contains reusable components
->util - contains logic which could be appied to all componenets where ever needed

components folder has three componenet
1) Header -contains the app header and cart
2) MealItem - contains Ui of each meal item
3) Meal->make a get request to get all meal items from backend and renders on the screen


I have created context object `ContextType` using createContext  
--here logic for addItem and remove item from cart is added using useReducer. and then wrapping it in app.jsx so that all the componenets and their child componenets can have the access of the context 
and its properties. Putting it in a seperate files as this logic we would need at more than one place.

-- I am opening the cart in the modal via a new context named 'UserProgressContext`. This context contains functionality to show and hide cart and show and hide checkout screen
   I have created a modal and used createPortal in it to open it in seperate location.the same modal 
   i will be using for checkout as well

--- Added cart Item in the project which displayes the content of the cart . list of meals added , their quantity and the price . I could have added it directly to cart item but to modularize it i decided to add it as seperate component. I have passed the infirmation like name , quatity and price as props. I neeed to call AddItem and removeItem from CartContext to increase and decrease the quantity of meals added. 

 There were two ways to do it .
1) use the cartContext in the cartItem 
2) pass it as prop from cart to cartItem .

I followed the second approch to keep the code in cartItem leaner since cartContext was already being used in cart so simpled passed it as prop. 

--- Added checkout component . i created a custom Input Componenet which has label and input in it to avoid the code duplicacy in ckecout component
    I also managed the modal visibility . An edge was handeled here by handling onClose in Modal component
     as when user tries to close the dialog with esc key onClose() is trigered modal closes but the value of cart is not changed so to do that 
     i am calling hideCloseCart on onclose method and passing to modal componnent via prop from the places modal is being used.

--- First i tried sending post request with order data then since http request is being made at several places i decided to create a custom hook `useHttp`
    which sends a request to backend fetches the response and returns and object containing responseData,error,loadingstatus,sendRequest method and clearData method
    I also created a seperate Error page to handle the error and show it .
    I am alos showing a success message in a modal .
    I could have created a seperate component for success but i am feeling lazy so doing it in the checkout component itself

...to be continued

   
