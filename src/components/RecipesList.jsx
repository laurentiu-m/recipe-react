import { useCategories } from "../hooks/useCategories";

function RecipesList() {
  const categories = useCategories();

  return (
    <div>
      <div className="flex flex-col m-auto gap-5">
        <div className="flex flex-wrap gap-2 m-auto sm:w-[75%]">
          {categories.map((category) => (
            <button
              key={category.strCategory}
              className="px-4 py-2 bg-transparent border border-dark rounded-[24px] font-semibold text-sm"
            >
              {category.strCategory}
            </button>
          ))}
        </div>
        <form className="relative w-full m-auto flex flex-col gap-2 sm:w-[550px]">
          <input
            type="text"
            placeholder="Search for delicious recipes..."
            className="w-full px-6 py-3 bg-transparent border border-dark rounded-[24px] text-sm font-medium outline-none placeholder:text-dark min-[400px]:py-4 sm:text-base"
          />
          <button className="bg-primaryColor2 px-6 py-3 rounded-[24px] text-sm uppercase font-semibold min-[400px]:absolute min-[400px]:right-2 min-[400px]:top-1/2 min-[400px]:-translate-y-1/2 min-[400px]:px-4 min-[400px]:py-2">
            Search
          </button>
        </form>
      </div>

      <div>
        <h1>List</h1>
      </div>
    </div>
  );
}

export default RecipesList;
