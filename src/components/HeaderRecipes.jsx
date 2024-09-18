function HeaderRecipes() {
  return (
    <div className="flex flex-col items-center m-auto text-center py-16 gap-3 md:w-[500px] lg:w-[650px]">
      <p className="text-white bg-primaryColor3 text-sm font-medium uppercase px-2 py-1 rounded-[12px]">
        Recipes
      </p>
      <h1 className="font-bold text-[26px] uppercase leading-none md:text-[40px] lg:text-[60px]">
        Embark on a journey
      </h1>
      <p className="text-dark/80 text-sm md:text-base lg:text-lg">
        With our diverse collection of recipes we have something to satisfy
        every palate.
      </p>
    </div>
  );
}

export default HeaderRecipes;
