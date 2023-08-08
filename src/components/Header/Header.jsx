import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
const Header = () => {
  return (
    <header>
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          <li className={style.navigation__item}>
            <NavLink to="/">Strona głowna</NavLink>
          </li>
          <li className={style.navigation__item}>
            <NavLink to="Teoria">Teoria</NavLink>
          </li>
          <li className={style.navigation__item}>
            <NavLink to="Ćwiczenia">Ćwiczenia</NavLink>
          </li>
          <li className={style.navigation__item}>
            <NavLink to="Spis-treści">Spis Treści</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
