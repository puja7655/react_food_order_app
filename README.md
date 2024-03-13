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

...to be continued

   
