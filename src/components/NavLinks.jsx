import { useLocation } from "react-router-dom";

function NavLinks() {
  const location = useLocation();

  return (
    <ul className="hidden sm:flex gap-12 mr-6 font-semibold uppercase lg:gap-16 xl:gap-24">
      <li
        className={`${
          location.pathname === "/"
            ? "border-b-4 border-b-primaryColor3 rounded-[2px]"
            : "text-dark/50"
        }`}
      >
        <a
          href="/"
          className={`transition-all hover:text-primaryColor2 ${
            location.pathname === "/" && "hover:text-dark"
          }`}
        >
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
        <a
          href="/recipes"
          className={`transition-all hover:text-primaryColor2 ${
            location.pathname.startsWith("/recipe") && "hover:text-dark"
          }`}
        >
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
        <a
          href="/about"
          className={`transition-all hover:text-primaryColor2 ${
            location.pathname === "/about" && "hover:text-dark"
          }`}
        >
          About Us
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
