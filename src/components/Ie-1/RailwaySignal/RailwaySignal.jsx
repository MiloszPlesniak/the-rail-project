// import { useState } from "react";

import style from './RailwaySignal.module.scss';
import clsx from 'clsx';

const RailwaySignal = ({ table, onClick = () => {} }) => {
  const lights = {
    red: clsx(style.red),
    green: clsx(style.green),
    orange: clsx(style.orange),
    white: clsx(style.white, style.flashing),
    fleshGreen: clsx(style.flashing, style.green),
    fleshOrange: clsx(style.flashing, style.orange),
  };
  const { green, red, white, orange, fleshGreen, fleshOrange } = lights;
  
  return (
    <div>
      <div className={style.railwaySignal}>
        <div className={style.railwaySignal__cover}>
          <div className={style.railwaySignal__signaling}>
            <div className={style.railwaySignal__signal}>
              <div
                onClick={() => onClick(1)}
                className={clsx(style.railwaySignal__signalLight, {
                  [red]: table[0] === 1,
                  [green]: table[0] === 2,
                  [orange]: table[0] === 3,
                  [white]: table[0] === 4,
                  [fleshGreen]: table[0] === 5,
                  [fleshOrange]: table[0] === 6,
                })}
              ></div>
            </div>
            <div className={style.railwaySignal__signal}>
              <div
                onClick={() => onClick(2)}
                className={clsx(style.railwaySignal__signalLight, {
                  [red]: table[1] === 1,
                  [green]: table[1] === 2,
                  [orange]: table[1] === 3,
                  [white]: table[1] === 4,
                  [fleshGreen]: table[1] === 5,
                  [fleshOrange]: table[1] === 6,
                })}
              ></div>
            </div>
            <div className={style.railwaySignal__signal}>
              <div
                onClick={() => onClick(3)}
                className={clsx(style.railwaySignal__signalLight, {
                  [red]: table[2] === 1,
                  [green]: table[2] === 2,
                  [orange]: table[2] === 3,
                  [white]: table[2] === 4,
                  [fleshGreen]: table[2] === 5,
                  [fleshOrange]: table[2] === 6,
                })}
              ></div>
            </div>
          </div>
        </div>
        <div className={style.railwaySignal__signalBlock}>
          <div
            onClick={() => onClick(4)}
            className={clsx(style.railwaySignal__signalBlockLight, {
              [red]: table[3] === 1,
              [green]: table[3] === 2,
              [orange]: table[3] === 3,
              [white]: table[3] === 4,
              [fleshGreen]: table[3] === 5,
              [fleshOrange]: table[3] === 6,
            })}
          ></div>
        </div>
        <div className={style.railwaySignal__column}></div>
      </div>
    </div>
  );
};
export default RailwaySignal;
