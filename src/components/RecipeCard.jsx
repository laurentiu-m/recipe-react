function RecipeCard({ food, tags }) {
  return (
    <div className="border border-dark/15 bg-light rounded-[16px] w-full">
      <img
        src={food.strMealThumb}
        alt="food-img"
        className="rounded-t-[16px] object-cover w-full h-[200px] min-[500px]:h-[280px] md:h-[320px]"
      />
      <div className="flex flex-col gap-8 p-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[21px] leading-tight">
            {food.strMeal}
          </h1>
          <h1>{food.strCategory}</h1>

          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <p
                key={tag}
                className="text-xs text-light bg-primaryColor2 p-1 rounded-md font-medium"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

        <button className="px-6 py-3 border border-dark bg-transparent rounded-[24px] font-semibold text-sm uppercase">
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
