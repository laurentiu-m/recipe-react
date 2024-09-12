import Links from "./Links";
import SocialLinks from "./SocialLinks";

function MobileNavMenu() {
  return (
    <div className="w-full absolute top-[85px] left-0 z-50 flex flex-col gap-10 px-4 pt-4 pb-11 bg-dark text-white font-semibold uppercase rounded-[32px] sm:hidden">
      <Links />
      <SocialLinks />
    </div>
  );
}

export default MobileNavMenu;
