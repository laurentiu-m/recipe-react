import { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

    const fetchCategories = async () => {
      try {
        const categoriesData = await fetchData(url);
        setCategories(categoriesData.meals);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setTimeout(() => {
      fetchCategories();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return categories;
};
