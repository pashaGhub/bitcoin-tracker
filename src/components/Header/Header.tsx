import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

const Header: React.FC = () => {
  return (
    <div data-testid="header" className="header">
      <div className="header__container">
        <h1>Bitcoin</h1>
        <nav>
          <NavLink
            to={ROUTES.currencies}
            className="header__container__navlink"
            activeClassName="header__container__navlink-active"
          >
            Currencies
          </NavLink>
          <NavLink
            to={ROUTES.analysis}
            className="header__container__navlink"
            activeClassName="header__container__navlink-active"
          >
            Analysis
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
