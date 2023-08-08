import { nanoid } from "nanoid";
import clsx from "clsx";
import style from "./PointsCounter.module.scss";

const PointsCounter = ({ pointsTable = [] }) => {
  return (
    <div className={style.pointsCounter}>
      <ul className={style.pointsCounter__list}>
        {pointsTable.map((item) => {
          console.log(item.correct);
          return (
            <li
              key={nanoid()}
              className={clsx(style.pointsCounter__item, {
                [style.pointsCounter__item__correct]: item.correct === true,
                [style.pointsCounter__item__notCorrectly]:
                  item.correct === false,
              })}
            >
              {item.name.slice(7, 11)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PointsCounter;
