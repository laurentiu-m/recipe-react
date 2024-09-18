import PropTypes from "prop-types";

function HeaderRecipe({ recipe }) {
  return (
    <div className="flex flex-col items-center m-auto gap-10">
      <div className="flex flex-col items-center m-auto gap-3 text-center sm:w-[600px] lg:w-[900px]">
        <p className="text-white bg-primaryColor3 text-sm font-medium uppercase px-2 py-1 rounded-[12px]">
          {recipe.strCategory}
        </p>
        <h1 className="font-extrabold text-[38px] uppercase leading-none md:text-[40px] lg:text-[60px]">
          {recipe.strMeal}
        </h1>
      </div>

      <img
        src={recipe.strMealThumb}
        alt={`${recipe.strMeal}-image`}
        className="rounded-[16px] h-[400px] object-cover sm:w-[600px] sm:h-[500px] lg:w-[650px] lg:h-[400px] xl:w-[600px] xl:h-[400px]"
      />
    </div>
  );
}

HeaderRecipe.propTypes = {
  recipe: PropTypes.object,
};

export default HeaderRecipe;
