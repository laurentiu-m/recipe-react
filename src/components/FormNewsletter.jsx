import PropTypes from "prop-types";

function FormNewsletter({ handleSubmit, inputRef, error }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full flex flex-col gap-2 sm:w-[400px] lg:w-[500px]"
    >
      <input
        type="text"
        ref={inputRef}
        placeholder={`${error ? "Invalid Email!" : "Email Address"}`}
        className={`px-6 py-3 rounded-[24px] bg-white font-medium outline-none ${
          error
            ? "placeholder:text-primaryColor3 placeholder:font-semibold"
            : "placeholder:text-dark/40 placeholder:font-medium"
        }  sm:py-4`}
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-[24px] bg-dark uppercase text-white text-sm font-medium transition-all sm:hover:bg-primaryColor3 sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2"
      >
        Subscribe
      </button>
    </form>
  );
}

FormNewsletter.propTypes = {
  handleSubmit: PropTypes.func,
  inputRef: PropTypes.object,
  error: PropTypes.bool,
};

export default FormNewsletter;
