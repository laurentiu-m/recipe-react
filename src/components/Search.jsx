function Search() {
  return (
    <form className="relative w-full m-auto flex flex-col gap-2 sm:w-[550px]">
      <input
        type="text"
        placeholder="Search for delicious recipes..."
        className="w-full px-6 py-3 bg-transparent border border-dark rounded-[24px] text-sm font-medium outline-none placeholder:text-dark min-[400px]:py-4 sm:text-base"
      />
      <button className="bg-primaryColor2 px-6 py-3 rounded-[24px] text-sm uppercase font-bold min-[400px]:absolute min-[400px]:right-2 min-[400px]:top-1/2 min-[400px]:-translate-y-1/2 min-[400px]:px-4 min-[400px]:py-2 transition-all hover:bg-dark hover:text-white">
        Search
      </button>
    </form>
  );
}

export default Search;
