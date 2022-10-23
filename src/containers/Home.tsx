import React from 'react';
import GridItem from '../components/GridItem/GridItem';
import { content } from '../data/content';
import s from './Home.module.scss';

const Home = () => {
  const left = [...content].splice(0, 5);
  const middle = [...content].splice(5, 5);
  const right = [...content].splice(10, 5);

  return (
    <div className={s.main_container} id="main">
      <div className={s.grid_wrap}>
        <div className={s.left}>
          {left.map((element) => (
            <GridItem {...element} />
          ))}
        </div>
        <div className={s.middle}>
          {middle.map((element) => (
            <GridItem {...element} />
          ))}
        </div>
        <div className={s.right}>
          {right.map((element) => (
            <GridItem {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
