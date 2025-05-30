import { useDispatch, useSelector } from 'react-redux';
import { moveSlice } from '../store/slices/move'
import classes from './Pole.module.css'
import { itemsSlice } from '../store/slices/items';
import { moveItem } from '../store/slices/items';
import { Item } from './Item';

export const Pole = ({ id }) => {
  const { setSource, dropSource } = moveSlice.actions;
  const { getItems } = itemsSlice.selectors;
  const { getSource } = moveSlice.selectors;
  const dispatch = useDispatch();

  const items = useSelector(getItems)[id] || [];
  const source = useSelector(getSource);

  const handleClick = () => {
    if (source === null) {
      if (items.length > 0) {
        dispatch(setSource(id));
      }
    } else {
      if (source === id) {
        dispatch(dropSource());
      } else {
        dispatch(moveItem({ from: source, to: id }));
        dispatch(dropSource());
      }
    }
  }

  const renderItems = () => {
    return items.map((itemId) => <Item key={itemId} number={itemId} />);
  }

  return (
    <div className={ classes.pole } onClick={handleClick}>
      { renderItems() }
    </div>
  )
}
