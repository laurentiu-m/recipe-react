import { useNavigate } from "react-router-dom";

function HeaderAbout() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/recipes");
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center m-auto py-16 md:w-[500px]">
      <h1 className="font-extrabold text-[38px] leading-none text-center uppercase md:text-[60px]">
        Welcome to Tasty Search!
      </h1>

      <button
        onClick={handleClick}
        className="bg-primaryColor2 w-[185px] px-6 py-3 rounded-3xl font-semibold text-sm uppercase transition-all hover:bg-dark hover:text-white"
      >
        Explore Recipes
      </button>
    </div>
  );
}

export default HeaderAbout;
