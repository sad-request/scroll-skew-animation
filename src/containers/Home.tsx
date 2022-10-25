import React, { useEffect, useRef } from 'react';
import GridItem from '../components/GridItem/GridItem';
import { content } from '../data/content';
import s from './Home.module.scss';
import LocomotiveScroll from 'locomotive-scroll';
import imagesLoaded from 'imagesloaded';

const Home = () => {
  const ref = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const middleColRef = useRef(null);

  const preloadedImages = (selector: string) => {
    return new Promise((resolve) => {
      imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
  };

  useEffect(() => {
    const scrollElem = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: { smooth: true },
      getDirection: true,
      getSpeed: true,
    });

    Promise.all([preloadedImages('.item_image')]).then(() => {
      scrollElem.update();
    });
  }, []);

  const left = [...content].splice(0, 5);
  const middle = [...content].splice(5, 5);
  const right = [...content].splice(10, 5);

  return (
    <div className={s.main_container} id="main" data-scroll-container ref={ref}>
      <div className={s.grid_wrap}>
        <div className={s.left} ref={leftColRef}>
          {left.map((element) => (
            <GridItem {...element} />
          ))}
        </div>
        <div className={s.middle} ref={middleColRef}>
          {middle.map((element) => (
            <GridItem {...element} />
          ))}
        </div>
        <div className={s.right} ref={rightColRef}>
          {right.map((element) => (
            <GridItem {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
