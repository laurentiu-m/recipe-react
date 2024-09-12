import NavLinks from "./NavLinks";
import MobileNavMenu from "./MobileNavMenu";
import Logo from "./Logo";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import closeIcon from "../assets/close-icon.svg";
import { useState } from "react";

function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="bg-transparent border border-dark/30 rounded-full">
      <div className="relative flex items-center justify-between mx-auto p-4 sm:px-8">
        <Logo />
        <NavLinks />
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="bg-dark/20 w-9 h-9 flex items-center justify-center rounded-full sm:hidden"
        >
          <img
            src={showMobileMenu ? closeIcon : hamburgerMenu}
            alt="hamburger-menu-icon"
            className="w-5 h-5"
          />
        </button>
        {showMobileMenu && <MobileNavMenu />}
      </div>
    </nav>
  );
}

export default Nav;
