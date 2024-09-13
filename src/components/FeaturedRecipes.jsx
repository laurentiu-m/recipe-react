import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function FeaturedRecipes() {
  const [food, setFood] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52794"
        );
        const data = await response.json();
        setFood(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFood();
  }, []);

  if (!food) {
    return;
  }

  const tags = food.strTags.split(",");

  return (
    <div className="flex flex-col gap-5 border border-dark/25 rounded-[32px] py-10 px-4 md:px-10">
      <h1 className="font-bold text-[22px] uppercase md:text-[30px] lg:text-[40px]">
        Featured Recipes
      </h1>

      <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <RecipeCard food={food} tags={tags} />
        <RecipeCard food={food} tags={tags} />
        <RecipeCard food={food} tags={tags} />
      </div>
    </div>
  );
}

export default FeaturedRecipes;
