import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function Ingredients({ ingredients }) {
  return (
    <div className="flex flex-col gap-4 px-4 py-6 bg-light rounded-[24px] border border-dark/25 sm:w-[600px] sm:p-8 lg:w-[650px] xl:h-full xl:w-[500px]">
      <h1 className="text-primaryColor3 uppercase font-semibold sm:text-2xl">
        Ingredients
      </h1>
      <ul className="list-disc pl-4">
        {ingredients.map((ingredient) => (
          <li key={uuidv4()} className="sm:text-lg">
            {ingredient.ingredient} {ingredient.measures}
          </li>
        ))}
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.array,
};

export default Ingredients;
