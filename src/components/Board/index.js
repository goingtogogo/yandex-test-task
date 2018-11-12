import React from 'react';

import Filters from './Filters';
import Table from './Table';
import main from './style.css';

const Board = () => (
  <div className={main.wrapper}>
    <Filters />
    <Table />
  </div>
);

export default Board;
