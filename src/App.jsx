import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <Router>
      <div className="font-montserrat text-dark p-4 xl:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
