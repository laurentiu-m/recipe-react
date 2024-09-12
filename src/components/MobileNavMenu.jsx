import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

function MobileNavMenu() {
  return (
    <div className="w-full absolute top-[85px] left-0 z-50 flex flex-col gap-10 px-4 pt-4 pb-11 bg-dark text-white font-semibold uppercase rounded-[32px] sm:hidden">
      <ul className="flex flex-col gap-3">
        <li className="border-b border-b-white/15 py-4 px-2">
          <a href="/">Home</a>
        </li>

        <li className="border-b border-b-white/15 py-4 px-2">
          <a href="/" className="">
            Recipes
          </a>
        </li>

        <li className="border-b border-b-white/15 py-4 px-2">
          <a href="/" className="">
            About Us
          </a>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-4">
        <img src={facebookIcon} alt="facebook-icon" className="w-8 h-8" />
        <img src={instagramIcon} alt="instagram-icon" className="w-9 h-9" />
        <img src={youtubeIcon} alt="youtube-icon" className="w-9 h-9" />
      </div>
    </div>
  );
}

export default MobileNavMenu;
