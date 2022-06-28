import React from "react";

function Registr() {
  const [form, setForm] = React.useState([]);

  function change(e, prop) {
    setForm({ ...form, [prop]: e.target.value });
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
          <button>Войти</button>
          <button>Войти</button>
        </div>
      </div>
    </>
  );
}

export default Registr;
