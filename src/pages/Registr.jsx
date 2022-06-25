import React from "react";
import { addUser } from "../redux/counterSlice";
import { useDispatch } from "react-redux/es/exports";
function Registr() {
  const [obj, setObj] = React.useState([]);
  const [items, setItem] = React.useState([{}]);

  const dispatch = useDispatch();

  console.log(items);

  function add() {
    items.push(obj);
  }
  function change(e, prop) {
    setObj({ ...obj, [prop]: e.target.value });
  }
  return (
    <>
      <h1>Регистрация</h1>
      <div className="authWrapper">
        <div className="formAuth">
          <input type="text" onChange={e => change(e, "name")} placeholder="Имя" />
          <input type="text" onChange={e => change(e, "email")} placeholder="Email" />
          <input type="text" onChange={e => change(e, "adress")} placeholder="Адрес" />
          <input type="text" onChange={e => change(e, "phone")} placeholder="Номер телефона" />
          <button onClick={() => dispatch(addUser(items))}>Войти</button>
          <button onClick={() => add()}>Войти</button>
        </div>
      </div>
    </>
  );
}

export default Registr;
