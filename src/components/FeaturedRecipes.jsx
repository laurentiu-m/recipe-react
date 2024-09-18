import { useRecipesId } from "../hooks/useRecipesId";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";

const recipesId = ["52982", "52794", "52947"];

function FeaturedRecipes() {
  const recipes = useRecipesId(recipesId);

  return (
    <div className="flex flex-col gap-5 border border-dark/25 rounded-[32px] py-10 px-4 md:px-10">
      <h1 className="font-bold text-[22px] uppercase md:text-[30px] lg:text-[40px]">
        Featured Recipes
      </h1>

      {recipes.length === 0 ? (
        <Loading height={"50"} />
      ) : (
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedRecipes;
