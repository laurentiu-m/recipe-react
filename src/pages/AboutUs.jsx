import Nav from "../components/Nav";
import HeaderAbout from "../components/HeaderAbout";
import FeaturedRecipes from "../components/FeaturedRecipes";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Nav />
      <HeaderAbout />

      <div className="flex flex-col gap-4 border border-dark/25 px-4 py-8 rounded-[24px] md:px-10 lg:items-center">
        <h1 className="font-bold text-[26px] leading-none uppercase md:text-[40px]">
          About Us
        </h1>
        <p className="text-sm text-left md:text-base lg:text-lg lg:w-[950px]">
          At Tasty Search, we believe cooking should be as enjoyable as eating.
          Our platform is designed to make finding the right recipe effortless
          and exciting. Whether you&apos;re in the mood for a quick snack, a
          gourmet meal, or something to fit your dietary needs, Tasty Search has
          you covered. With thousands of recipes at your fingertips, we simplify
          the process so you can spend more time savoring and less time
          searching.
        </p>
        <p className="text-sm text-left md:text-base lg:text-lg lg:w-[950px]">
          Our mission is to inspire home cooks and food enthusiasts everywhere,
          empowering them to create delicious dishes with confidence. Tasty
          Search is not just a recipe database, it&apos;s a community where
          flavor meets creativity, and cooking becomes an adventure. Dive in,
          discover new recipes, and unleash your inner chef!
        </p>
      </div>

      <FeaturedRecipes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default AboutUs;
