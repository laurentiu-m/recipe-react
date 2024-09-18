import PropTypes from "prop-types";

function Loading({ height }) {
  return (
    <div
      style={{ height: `${height}vh` }}
      className={`flex justify-center items-center`}
    >
      <div className="rounded-full h-10 w-10 bg-primaryColor2 animate-ping xl:h-14 xl:w-14"></div>
    </div>
  );
}

Loading.propTypes = {
  height: PropTypes.string,
};

export default Loading;
