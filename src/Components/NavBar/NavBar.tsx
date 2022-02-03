import "./NavBar.scss";

import { ReactComponent as Pokemon } from "../../svg/pokemon.svg";
import { ReactComponent as Logo } from "../../svg/logo.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="text">
        <Pokemon />
      </div>
      <div className="logo">
        <div className="circle">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
