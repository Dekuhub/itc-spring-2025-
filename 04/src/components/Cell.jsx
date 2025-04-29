import classes from './Cell.module.css';
import clsx from 'clsx';
import { Knight } from './Knight';

export const Cell = ({ column, row, hasKnight, onCellClick }) => {
  const color = (column % 2 === row % 2) ? 'white' : 'black';

  const handleClick = () => {
    onCellClick();
  }

  return (
    <div
      className={clsx(classes.cell, classes[color])}
      onClick={handleClick}
    >
      {hasKnight && <Knight />}
    </div>
  )
}
