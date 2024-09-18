import { useCategories } from "../hooks/useCategories";
import { useRecipesId } from "../hooks/useRecipesId";
import Category from "./Category";
import Search from "./Search";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import { useEffect, useRef, useState } from "react";
import { useSearchRecipes } from "../hooks/useSearchRecipes";
import { useRecipesIdByCategory } from "../hooks/useRecipesIdByCategory";

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
  const [searchRecipesValue, setSearchRecipesValue] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = useCategories();
  const defaultRecipes = useRecipesId(defaultRecipesId);
  const recipesId = useRecipesIdByCategory(selectedCategory);
  const selectedRecipes = useRecipesId(recipesId);
  const searchedRecipes = useSearchRecipes(searchRecipesValue);

  const inputRef = useRef();

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, [
    categories,
    defaultRecipes,
    recipesId,
    selectedRecipes,
    searchedRecipes,
    loading,
  ]);

  const handleCategory = (category) => {
    if (loading) return;

    setSelectedCategory(category);
    setSearchRecipesValue("");
    setLoading(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) {
      inputRef.current.value = "";
      return;
    }

    const value = inputRef.current.value.trim();
    if (value === "") return;

    setSearchRecipesValue(value);
    inputRef.current.value = "";
    setSelectedCategory(null);
    setLoading(true);
  };

  const currentRecipes =
    searchRecipesValue && searchedRecipes && searchedRecipes.length > 0
      ? searchedRecipes
      : selectedCategory && selectedRecipes && selectedRecipes.length > 0
      ? selectedRecipes
      : defaultRecipes;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col m-auto gap-5">
        {categories.length === 0 ? (
          <Loading height={"20"} />
        ) : (
          <>
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
          </>
        )}
      </div>

      {loading ? (
        <Loading height={"40"} />
      ) : (
        <div className="grid grid-cols-1 gap-5 border border-dark/25 rounded-[24px] px-4 py-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {currentRecipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipesList;
