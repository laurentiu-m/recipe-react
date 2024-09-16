import PropTypes from "prop-types";

function Instructions({ instructions }) {
  return (
    <div className="flex flex-col gap-4 sm:w-[600px] lg:w-[650px] xl:w-full">
      <h1 className="font-bold text-[26px] uppercase sm:text-[40px]">
        Instructions
      </h1>
      <p className="text-left sm:text-lg xl:text-pretty">{instructions}</p>
    </div>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string,
};

export default Instructions;
