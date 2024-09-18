import PropTypes from "prop-types";

function Category({ category, handleCategory }) {
  return (
    <button
      onClick={() => handleCategory(category)}
      className="px-4 py-2 bg-transparent border border-dark rounded-[24px] font-semibold text-sm transition-bg duration-200 hover:bg-primaryColor1"
    >
      {category}
    </button>
  );
}

Category.propTypes = {
  category: PropTypes.string,
  handleCategory: PropTypes.func,
};

export default Category;
