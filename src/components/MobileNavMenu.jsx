import Links from "./Links";
import SocialLinks from "./SocialLinks";
import PropTypes from "prop-types";

function MobileNavMenu({ isOpen }) {
  return (
    <div
      className={`w-full ${
        isOpen ? "max-h-[400px]" : "max-h-0"
      } overflow-hidden absolute top-[90px] left-0 z-50 rounded-[32px] shadow-xl shadow-dark transition-max-height ease duration-500 sm:hidden`}
    >
      <div className="flex flex-col gap-10 py-11 px-4 bg-dark text-white font-semibold uppercase">
        <Links />
        <SocialLinks />
      </div>
    </div>
  );
}

MobileNavMenu.propTypes = {
  isOpen: PropTypes.bool,
};

export default MobileNavMenu;
