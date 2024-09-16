import { useCategories } from "../hooks/useCategories";
import { useRecipesId } from "../hooks/useRecipesId";
import Category from "./Category";
import Search from "./Search";
import RecipeCard from "./RecipeCard";
import { useEffect, useRef, useState } from "react";
import { useSearchRecipes } from "../hooks/useSearchRecipes";

const defaultRecipesId = [
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipesId, setRecipesId] = useState([]);
  const [searchRecipesValue, setSearchRecipesValue] = useState("");

  const categories = useCategories();
  const defaultRecipes = useRecipesId(defaultRecipesId);
  const selectedRecipes = useRecipesId(recipesId);
  const searchedRecipes = useSearchRecipes(searchRecipesValue);

  const inputRef = useRef();

  useEffect(() => {
    const fetchRecipesIdByCategory = async (category) => {
      if (!category) return;
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const data = await response.json();
        const recipesId = data.meals.map((meal) => meal.idMeal);
        setRecipesId(recipesId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipesIdByCategory(selectedCategory);
  }, [selectedCategory]);

  if (defaultRecipes.length === 0) {
    return;
  }

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchRecipesValue(inputRef.current.value);
    inputRef.current.value = "";
  };

  console.log(searchedRecipes);

  const currentRecipes = selectedCategory
    ? selectedRecipes
    : searchedRecipes.length !== 0
    ? searchedRecipes
    : defaultRecipes;

  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="flex flex-col m-auto gap-5">
        <div className="flex flex-wrap gap-2 m-auto sm:w-[75%]">
          {categories.map((category) => (
            <Category
              key={category.strCategory}
              category={category.strCategory}
              handleCategory={handleCategory}
            />
          ))}
        </div>

        <Search handleSubmit={handleSubmit} inputRef={inputRef} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipesList;
