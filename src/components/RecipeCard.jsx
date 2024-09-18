import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div className="border border-dark/15 bg-light rounded-[16px] w-full h-full flex flex-col">
      <img
        src={recipe.strMealThumb}
        alt="food-img"
        onClick={handleClick}
        className="rounded-t-[16px] object-cover cursor-pointer w-full h-[200px] min-[500px]:h-[280px] md:h-[320px]"
      />
      <div className="flex flex-col gap-6 p-4 flex-grow xl:p-6">
        <div className="flex flex-col gap-1 flex-grow">
          <h1 className="font-bold text-[21px] leading-tight xl:text-[24px]">
            {recipe.strMeal}
          </h1>
          <h1 className="xl:text-lg">{recipe.strCategory}</h1>
        </div>

        <button
          onClick={handleClick}
          className="px-6 py-3 border border-dark bg-transparent rounded-[24px] font-semibold text-sm uppercase mt-auto transition-all duration-200 hover:bg-dark hover:text-light"
        >
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
