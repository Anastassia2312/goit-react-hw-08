import { NavLink } from "react-router-dom";
import css from "./AuthNavigation.module.css";
import clsx from "clsx";
export default function AuthNavigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.wrapper}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="login">
        Log In
      </NavLink>
    </div>
  );
}
