function NavLinks() {
  return (
    <ul className="hidden sm:flex gap-12 mr-6 font-semibold uppercase lg:gap-16 xl:gap-24">
      <li>
        <a href="/" className="transition-all hover:text-primaryColor2">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="transition-all hover:text-primaryColor2">
          Recipes
        </a>
      </li>
      <li>
        <a href="/" className="transition-all hover:text-primaryColor2">
          About Us
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
