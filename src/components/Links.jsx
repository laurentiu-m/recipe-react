function Links() {
  return (
    <ul className="flex flex-col gap-3 text-sm md:flex-row md:items-center">
      <li className="border-b border-b-white/15 py-4 px-2 md:border-none">
        <a href="/" className="transition-all hover:text-white/60">
          Home
        </a>
      </li>

      <div className="hidden h-5 border-l border-l-white/15 md:block"></div>

      <li className="border-b border-b-white/15 py-4 px-2 md:border-none">
        <a href="/recipes" className="transition-all hover:text-white/60">
          Recipes
        </a>
      </li>

      <div className="hidden h-5 border-l border-l-white/15 md:block"></div>

      <li className="py-4 px-2">
        <a href="/about" className="transition-all hover:text-white/60">
          About Us
        </a>
      </li>
    </ul>
  );
}

export default Links;
