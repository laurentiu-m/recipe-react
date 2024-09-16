import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";

export const useRecipesId = (recipesId) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await Promise.all(
        recipesId.map((id) =>
          fetchData(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          )
        )
      );

      setRecipes(recipesData.map((recipe) => recipe.meals[0]));
    };
    if (recipesId.length > 0 || recipesId) {
      fetchRecipes();
    }
  }, [recipesId]);

  return recipes;
};
