import logo from "../assets/logo.svg";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={logo} alt="logo" className="w-10 h-10 sm:w-14 sm:h-14" />
      <div className="flex flex-col items-start justify-center leading-tight">
        <span className="font-bold text-sm mb-[-5px] sm:text-base">Tasty</span>
        <span className="font-bold text-sm sm:text-base">Search</span>
      </div>
    </a>
  );
}

export default Logo;
