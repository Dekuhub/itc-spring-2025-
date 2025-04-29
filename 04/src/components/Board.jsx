import React, { useState } from 'react';
import classes from './Board.module.css'
import { Cell } from './Cell'
import { Knight } from './Knight'

export const Board = () => {
  const [knightPos, setKnightPos] = useState({ row: 0, column: 0 });

  const cells = () => {
    const result = [];
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        const hasKnight = knightPos.row === row && knightPos.column === column;
        result.push(
          <Cell
            key={`${row}-${column}`}
            row={row}
            column={column}
            hasKnight={hasKnight}
            onCellClick={() => setKnightPos({ row, column })}
          />
        );
      }
    }
    return result;
  }

  return (
    <div className={classes.board}>
      {cells()}
    </div>
  )
}
