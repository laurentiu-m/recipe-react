import { useCategories } from "../hooks/useCategories";
import { useRecipesId } from "../hooks/useRecipesId";
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
  const recipes = useRecipesId(recipesId);

  if (recipes.length === 0 || !recipes) {
    return;
  }

  console.log(recipes);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col m-auto gap-5">
        <div className="flex flex-wrap gap-2 m-auto sm:w-[75%]">
          {categories.map((category) => (
            <button
              key={category.strCategory}
              className="px-4 py-2 bg-transparent border border-dark rounded-[24px] font-semibold text-sm"
            >
              {category.strCategory}
            </button>
          ))}
        </div>
        <form className="relative w-full m-auto flex flex-col gap-2 sm:w-[550px]">
          <input
            type="text"
            placeholder="Search for delicious recipes..."
            className="w-full px-6 py-3 bg-transparent border border-dark rounded-[24px] text-sm font-medium outline-none placeholder:text-dark min-[400px]:py-4 sm:text-base"
          />
          <button className="bg-primaryColor2 px-6 py-3 rounded-[24px] text-sm uppercase font-semibold min-[400px]:absolute min-[400px]:right-2 min-[400px]:top-1/2 min-[400px]:-translate-y-1/2 min-[400px]:px-4 min-[400px]:py-2">
            Search
          </button>
        </form>
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
