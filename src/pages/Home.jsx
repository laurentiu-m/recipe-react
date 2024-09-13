import Nav from "../components/Nav";
import HeaderHome from "../components/HeaderHome";
import FeaturedRecipes from "../components/FeaturedRecipes";
import RecipesHome from "../components/RecipesHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <HeaderHome />

      <main>
        <FeaturedRecipes />
        {/* <RecipesHome /> */}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
