import { railwaySignals } from "../../../suchData/railwaySignals";
import RailwaySignal from "../RailwaySignal/RailwaySignal";
import style from "./RailwaySignalList.module.scss";
const RailwaySignalList = () => {
  return (
    <ul className={style.railwaySignalList}>
      {railwaySignals.map((item) => (
        <li key={item.id}>
          <RailwaySignal table={item.code} />
          <article className={style.railwaySignalList__descryption}>
            <h3 className={style.railwaySignalList__title}>{item.name}</h3>
            <p className={style.railwaySignalList__paragraph}>
              {item.descryption}
              
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default RailwaySignalList;
