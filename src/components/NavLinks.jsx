import { useLocation } from "react-router-dom";

function NavLinks() {
  const location = useLocation();
  console.log(location);

  return (
    <ul className="hidden sm:flex gap-12 mr-6 font-semibold uppercase lg:gap-16 xl:gap-24">
      <li
        className={`${
          location.pathname === "/"
            ? "border-b-4 border-b-primaryColor3 rounded-[2px]"
            : "text-dark/50"
        }`}
      >
        <a href="/" className="transition-all hover:text-primaryColor2">
          Home
        </a>
      </li>
      <li
        className={`${
          location.pathname.startsWith("/recipe")
            ? "border-b-4 border-b-primaryColor3 rounded-[2px]"
            : "text-dark/50"
        }`}
      >
        <a href="/recipes" className="transition-all hover:text-primaryColor2">
          Recipes
        </a>
      </li>
      <li
        className={`${
          location.pathname === "/about"
            ? "border-b-4 border-b-primaryColor3 rounded-[2px]"
            : "text-dark/50"
        }`}
      >
        <a href="/about" className="transition-all hover:text-primaryColor2">
          About Us
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
