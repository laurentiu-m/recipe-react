export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllIngredients = (recipe) => {
  const ingredients = Object.keys(recipe)
    .filter(
      (key) =>
        key.startsWith("strIngredient") && recipe[key] !== "" && recipe[key]
    )
    .map((key) => recipe[key]);

  const measures = Object.keys(recipe)
    .filter(
      (key) => key.startsWith("strMeasure") && recipe[key] !== "" && recipe[key]
    )
    .map((key) => recipe[key].toLowerCase());

  const recipeIngredient = ingredients.map((ingredient, index) => ({
    ingredient: ingredient,
    measures: measures[index] || "",
  }));

  return recipeIngredient;
};
