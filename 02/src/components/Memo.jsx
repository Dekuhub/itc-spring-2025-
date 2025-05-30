import classes from './Memo.module.css'

export const Memo = () => {
  return (
    <div className={classes.memo}>
      <h1>Задание</h1>
      <pre>
        <ul>
          <li>[3] Сделать, чтобы по клику на строку данные попадали в форму</li>
          <li>[3+] Сделать, чтобы форма была видна только в случае, если была выбрана строка</li>
          <li>[4] Сделать, чтобы данные после редактирования и нажатия кнопки "Сохранить" попадали обратно в таблицу</li>
          <li>[4+] Сделать, чтобы выбор строки после сохранения сбрасывался</li>
          <li>[5] Сделать, чтобы после того, как выбрана строка таблицы, можно было выбрать другую строку и ее данные попадали бы в форму</li>
        </ul>
      </pre>
    </div>
  )
}
