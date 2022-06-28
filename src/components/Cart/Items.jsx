import React from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Items() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://61efda37732d93001778e635.mockapi.io/flowers/").then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      {data.map(obj => (
        <div className="item" id={obj.id}>
          <div className="image">
            <Link to={`/item/${obj.id}`}>
              <img src={obj.image} alt="" />
            </Link>
          </div>
          <h4>{obj.title}</h4>
          <p>{obj.price} руб.</p>
          <div className="btnWrapper">
            <div className="plus">
              <img src="../image/plus.svg" alt="" />
            </div>
            <label>Добавить в корзину</label>
          </div>
          <Outlet />
        </div>
      ))}
    </>
  );
}

export default Items;
