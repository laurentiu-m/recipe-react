import Nav from "../components/Nav";
import HeaderRecipes from "../components/HeaderRecipes";
import RecipesList from "../components/RecipesList";
import Footer from "../components/Footer";
import { useScrollTop } from "../hooks/useScollTop";

function Recipes() {
  useScrollTop();

  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Nav />
      <HeaderRecipes />
      <RecipesList />
      <Footer />
    </div>
  );
}

export default Recipes;
