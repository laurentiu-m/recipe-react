import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";

export const useRecipesIdByCategory = (category) => {
  const [recipesId, setRecipesId] = useState([]);

  useEffect(() => {
    let timer;
    const fetchRecipesId = async () => {
      try {
        const data = await fetchData(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const recipesId = data.meals.map((meal) => meal.idMeal);
        setRecipesId(recipesId);
      } catch (error) {
        console.log(error);
      }
    };

    if (category) {
      timer = setTimeout(() => {
        fetchRecipesId();
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [category]);

  return recipesId;
};
