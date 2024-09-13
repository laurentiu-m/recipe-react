import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipesHome() {
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
    <div className="grid grid-cols-2 gap-4">
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
      <RecipeCard food={food} tags={tags} />
    </div>
  );
}

export default RecipesHome;
