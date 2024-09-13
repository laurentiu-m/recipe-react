import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";
import RecipeCard from "./RecipeCard";

function FeaturedRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipesId = ["52982", "52794", "52947"];

    const fetchRecipeId = async () => {
      try {
        const recipesData = await Promise.all(
          recipesId.map((id) =>
            fetchData(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            )
          )
        );
        setRecipes(recipesData.map((recipe) => recipe.meals[0]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipeId();
  }, []);

  if (recipes.length === 0) {
    return;
  }

  return (
    <div className="flex flex-col gap-5 border border-dark/25 rounded-[32px] py-10 px-4 md:px-10">
      <h1 className="font-bold text-[22px] uppercase md:text-[30px] lg:text-[40px]">
        Featured Recipes
      </h1>

      <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedRecipes;
