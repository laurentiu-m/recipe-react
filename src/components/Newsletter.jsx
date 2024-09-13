function Newsletter() {
  return (
    <div className="bg-primaryColor3 h-[550px] flex flex-col items-center justify-center gap-12 rounded-[24px] px-5 sm:h-[400px] lg:h-[500px]">
      <div className="flex flex-col items-center gap-3 text-light text-center sm:w-[550px] lg:w-[900px]">
        <p className="font-medium uppercase lg:text-lg">Subscribe</p>
        <h1 className="font-extrabold text-[38px] uppercase leading-none lg:text-[80px]">
          Join the fun subscribe now!
        </h1>
        <p className="lg:text-lg lg:w-[650px]">
          Subscribe to our newsletter for a weekly serving of recipes, cooking
          tips, and exclusive insights straight to your inbox.
        </p>
      </div>

      <form
        action="/"
        className="relative w-full flex flex-col gap-2 sm:w-[400px] lg:w-[500px]"
      >
        <input
          type="text"
          placeholder="Email Address"
          className="px-6 py-3 rounded-[24px] bg-white font-medium placeholder:text-dark/40 placeholder:font-medium sm:py-4"
        />
        <button className="px-6 py-3 rounded-[24px] bg-dark uppercase text-white text-sm font-medium transition-all sm:hover:bg-primaryColor3 sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
