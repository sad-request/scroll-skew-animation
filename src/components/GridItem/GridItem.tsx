import React from 'react';
import s from './GridItem.module.scss';

interface MediaObj {
  url: string;
  description: string;
}

const GridItem = (prop: MediaObj) => {
  return (
    <div className={s.grid_item}>
      <img src={prop.url} className={s.item_image} />
      <p>{prop.description}</p>
    </div>
  );
};

export default GridItem;
