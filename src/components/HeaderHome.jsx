import backgroundImage from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";

function HeaderHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/recipes");
  };

  return (
    <div
      className="relative h-[80vh] flex flex-col items-center justify-center gap-10 px-4 rounded-[32px] bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute rounded-[32px] inset-0 bg-dark opacity-80"></div>

      <div className="relative z-20 flex flex-col items-center gap-3">
        <h1 className="text-white font-extrabold text-[38px] uppercase leading-none lg:w-[900px] lg:text-[80px]">
          Unleash Culinary Excellence
        </h1>
        <p className="text-white sm:w-[450px] sm:text-[21px]">
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen
        </p>
      </div>

      <button
        onClick={handleClick}
        className="relative z-20 bg-primaryColor2 px-6 py-3 rounded-3xl font-semibold text-sm uppercase transition-all hover:bg-white"
      >
        Explore Recipes
      </button>
    </div>
  );
}

export default HeaderHome;
