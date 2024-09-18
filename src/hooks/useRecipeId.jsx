import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";

export const useRecipeId = (id) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await fetchData(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setTimeout(() => {
      fetchRecipe();
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  return recipe;
};
