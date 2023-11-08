import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import { useState } from 'react';
import style from './MenuItem.module.scss';
import { BsArrowBarRight } from 'react-icons/bs';
import Media from 'react-media';

const MenuItem = ({ title, table }) => {
  const openMenuItem = {
    menu: clsx(style.menuItem, style['menuItem--open']),
    arrowBtn: clsx(style.menuShowBtn, style['menuShowBtn--open']),
  };
  const closeMenuItem = {
    menu: clsx(style.menuItem, style['menuItem--close']),
    arrowBtn: clsx(style.menuShowBtn, style['menuShowBtn--close']),
  };

  const [togleMenu, setTogleMenu] = useState(openMenuItem.menu);
  const [togleBtn, setTogleBtn] = useState(openMenuItem.arrowBtn);
  const openList = e => {
    e.target.nextSibling.classList.toggle(style.show);
  };
  const openMenu = () => {
    if (
      togleMenu === 'MenuItem_menuItem__Dra2C MenuItem_menuItem--open__8T0UX'
    ) {
      setTogleMenu(closeMenuItem.menu);
      setTogleBtn(closeMenuItem.arrowBtn);
    } else {
      setTogleMenu(openMenuItem.menu);
      setTogleBtn(openMenuItem.arrowBtn);
    }
  };

  return (
    <div className={togleMenu}>
      <Media
        query="(max-width:800px)"
        render={() => (
          <BsArrowBarRight onClick={openMenu} className={togleBtn} />
        )}
      />

      <p onClick={openList} className={style.menuItem__header}>
        {title}
        <span className={style.menuItem__icon}></span>
      </p>
      <div className={style.menuItem__box}>
        <ul className={style.menuItem__list}>
          {table.map(item => (
            <li key={nanoid()} className={style.menuItem__listItem}>
              <Link to={item.to} className={style.menuItem__link}>
                {item.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MenuItem;
