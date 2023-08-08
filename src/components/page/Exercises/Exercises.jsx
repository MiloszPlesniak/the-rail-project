// import RailwaySignal from "./Ie-1/RailwaySignal/RailwaySignal";
// import { railwaySignals } from "../suchData/railwaySignals";
import MenuItem from "../../MenuItem/MenuItem";
import { Outlet } from "react-router-dom";
import style from "../Theory/Theory.module.scss";
const Exercises = () => {
  const table = [{ linkName: "Semafory", to: "/Ćwiczenia/Semafory" }];
  return (
    <>
      <div className={style.theory}>
        <ul className={style.theory__list}>
          <li className={style.theory__item}>
            <MenuItem title="Sygnały" table={table} />
          </li>
        </ul>
        <div className={style.theory__materials}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Exercises;
