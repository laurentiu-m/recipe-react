import PropTypes from "prop-types";

function RecipeCard({ recipe }) {
  return (
    <div className="border border-dark/15 bg-light rounded-[16px] w-full h-full flex flex-col">
      <img
        src={recipe.strMealThumb}
        alt="food-img"
        className="rounded-t-[16px] object-cover w-full h-[200px] min-[500px]:h-[280px] md:h-[320px]"
      />
      <div className="flex flex-col gap-6 p-4 flex-grow xl:p-6">
        <div className="flex flex-col gap-1 flex-grow">
          <h1 className="font-bold text-[21px] leading-tight xl:text-[24px]">
            {recipe.strMeal}
          </h1>
          <h1 className="xl:text-lg">{recipe.strCategory}</h1>
        </div>

        <button className="px-6 py-3 border border-dark bg-transparent rounded-[24px] font-semibold text-sm uppercase mt-auto">
          View Recipe
        </button>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeCard;
