import React, { useEffect, useState} from "react";
import Card from "./Card";
const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const meals = await response.json();
      setLoadedMeals(meals);
      setIsLoading(false);
    }
    fetchMeals();
  }, []);

  

  return isLoading
  ? <p>Loading...</p> 
  : (<ul id="meals">
      {loadedMeals.map((meal) => (
        <Card key={meal.id} meal={meal}/>
      ))}
  </ul>);
};

export default Meals;
