import Logo from "./Logo";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import logoWhite from "../assets/logo-white.svg";

function Footer() {
  return (
    <>
      <div className="p-6 bg-dark rounded-[32px]">
        <div className="flex flex-col pb-6 gap-6 border-b border-b-white/15 md:flex-row md:justify-between md:mx-10 md:pb-4">
          <div className="flex justify-center">
            <Logo logo={logoWhite} color={"white"} />
          </div>

          <div className="text-white font-semibold uppercase">
            <Links />
          </div>

          <SocialLinks />
        </div>
        <p className="text-white/60 text-center text-xs font-medium pt-6">
          Copyright: &copy; 2024 Tasty Search.
        </p>
      </div>
    </>
  );
}

export default Footer;
