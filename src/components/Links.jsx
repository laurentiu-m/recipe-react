function Links() {
  return (
    <ul className="flex flex-col gap-3 text-sm md:flex-row md:items-center">
      <li className="border-b border-b-white/15 py-4 px-2 md:border-none">
        <a href="/">Home</a>
      </li>

      <div className="hidden h-5 border-l border-l-white/15 md:block"></div>

      <li className="border-b border-b-white/15 py-4 px-2 md:border-none">
        <a href="/" className="">
          Recipes
        </a>
      </li>

      <div className="hidden h-5 border-l border-l-white/15 md:block"></div>

      <li className="py-4 px-2">
        <a href="/" className="">
          About Us
        </a>
      </li>
    </ul>
  );
}

export default Links;
