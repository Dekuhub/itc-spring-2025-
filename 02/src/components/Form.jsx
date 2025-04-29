import classes from "./Form.module.css";
import { useRef, useEffect } from "react";

export const Form = ({ row, setRows, setCurrentRow }) => {
  const { id, name, city } = row;
  const nameRef = useRef();
  const cityRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.value = name;
    if (cityRef.current) cityRef.current.value = city;
  }, [name, city]);

  const handleSave = () => {
    setRows(prevRows =>
      prevRows.map(r =>
        r.id === id
          ? { ...r, name: nameRef.current.value, city: cityRef.current.value }
          : r
      )
    );
  };

  return (
    <div className={classes.form}>
      <div className={classes.row}>
        <label className={classes.label}>Имя</label>
        <input className={classes.input} ref={nameRef} defaultValue={name} />
      </div>
      <div className={classes.row}>
        <label className={classes.label}>Город</label>
        <input className={classes.input} ref={cityRef} defaultValue={city} />
      </div>
      <div className={classes.row}>
        <button className={classes.button} onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
