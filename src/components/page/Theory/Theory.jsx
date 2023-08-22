import { Outlet } from 'react-router-dom';

import style from './Theory.module.scss';
import MenuItem from '../../MenuItem/MenuItem';

const Theory = () => {
  const table = [{ linkName: 'Semafory', to: '/Teoria/Semafory' }];
  
  return (
    <>
      <div className={style.theory}>
        <ul className={style.theory__list}>
          <li className={style.theory__item}>
            <MenuItem
             
              title="Sygnały"
              to="/Teoria/Semafory"
              linkName="Semafory"
              table={table}
            />
          </li>
        </ul>
        <div className={style.theory__materials}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Theory;


