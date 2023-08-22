import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import style from './MenuItem.module.scss';
import { BsArrowBarRight } from 'react-icons/bs';
import Media from 'react-media';

const MenuItem = ({ title, table }) => {
  const openList = e => {
    e.target.nextSibling.classList.toggle(style.show);
  };

  return (
    <div className={style.menuItem}>
      <Media
        query="(max-width:800px)"
        render={() => (
          <BsArrowBarRight className={style.menuShowBtn}/>
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
