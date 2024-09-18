import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";

export const useSearchRecipes = (value) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let timer;
    const fetchRecipes = async () => {
      try {
        const data = await fetchData(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
        );
        setRecipes(data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    if (value.length !== 0) {
      timer = setTimeout(() => {
        fetchRecipes();
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [value]);

  return recipes;
};
