import { useCategories } from "../hooks/useCategories";
import { useRecipesId } from "../hooks/useRecipesId";
import Category from "./Category";
import Search from "./Search";
import RecipeCard from "./RecipeCard";

const recipesId = [
  "52959",
  "52965",
  "52839",
  "52904",
  "52767",
  "53080",
  "52775",
  "52796",
];

function RecipesList() {
  const categories = useCategories();
  let recipes = useRecipesId(recipesId);

  if (recipes.length === 0) {
    return;
  }

  console.log(recipes);

  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="flex flex-col m-auto gap-5">
        <div className="flex flex-wrap gap-2 m-auto sm:w-[75%]">
          {categories.map((category) => (
            <Category
              key={category.strCategory}
              category={category.strCategory}
            />
          ))}
        </div>

        <Search />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipesList;
