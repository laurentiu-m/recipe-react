import PropTypes from "prop-types";

function Category({ category }) {
  return (
    <button className="px-4 py-2 bg-transparent border border-dark rounded-[24px] font-semibold text-sm transition-bg duration-200 hover:bg-primaryColor1">
      {category}
    </button>
  );
}

Category.propTypes = {
  category: PropTypes.string,
};

export default Category;
