import { useEffect, useState } from "react"
import MealItem from "./MealItem";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals', {
                method: 'GET'
            })
            if (!response.ok) {
                //..
            }
            const meals = await response.json();// backend is sending the response in json format , to extract the data and calue in javascript formal we use json() method
            setLoadedMeals(meals)
        }
        fetchMeals()
    }, [])

    console.log(loadedMeals)
    return  <ul id="meals">
            {loadedMeals.map((meal) => {
               return <MealItem key={meal.id} meal={meal}/>
            })}
        </ul>
    
}