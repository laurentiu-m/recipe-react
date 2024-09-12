import Nav from "../components/Nav";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <HeaderHome />
      <main></main>
      <Footer />
    </div>
  );
}

export default Home;
