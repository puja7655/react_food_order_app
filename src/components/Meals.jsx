import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx"

const requestConfig = {}; // storing the config i seperate variable as if we put empty opbject in useHttp, everytime the component loads object would be recreated leading to infinite loop
export default function Meals() {

    const {
        data: loadedMeals,
        error,
        loadiing
    } = useHttp('http://localhost:3000/meals', requestConfig, [])

    if (loadiing) {
        return <p className="center">Fetching Data...</p>
    }

    if (error) {
        return <Error title="Failed to Fetch meals" message={error} />
    }
    return <ul id="meals">
        {loadedMeals.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />
        })}
    </ul>

}