import { nanoid } from 'nanoid';
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from 'react-icons/md';
import clsx from 'clsx';
import style from './PointsCounter.module.scss';

const PointsCounter = ({ pointsTable = [], prev, next }) => {
  return (
    <div className={style.pointsCounter}>
      <ul className={style.pointsCounter__list}>
        <li className={style.pointsCounter__item__icon}>
          <MdOutlineSkipPrevious
            className={style.pointsCounter__icon}
            onClick={prev}
          />
        </li>
        {pointsTable.map(item => {
          return (
            <li
              key={nanoid()}
              className={clsx(style.pointsCounter__item, {
                [style.pointsCounter__item__correct]: item.correct === true,
                [style.pointsCounter__item__notCorrectly]:
                  item.correct === false,
              })}
            >
              {item.symbol}
            </li>
          );
        })}
        <li className={style.pointsCounter__item__icon}>
          <MdOutlineSkipNext
            className={style.pointsCounter__icon}
            onClick={next}
          />
        </li>
      </ul>
    </div>
  );
};

export default PointsCounter;
