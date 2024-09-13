import Nav from "../components/Nav";
import HeaderHome from "../components/HeaderHome";
import FeaturedRecipes from "../components/FeaturedRecipes";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <HeaderHome />

      <FeaturedRecipes />
      <Newsletter />

      <Footer />
    </div>
  );
}

export default Home;
