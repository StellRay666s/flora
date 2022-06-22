import React from "react";
import ShemWork from "../components/ShemWork";
import axios from "axios";
import { useParams } from "react-router-dom";
function Item() {
  let { id } = useParams();

  const [items, setTtems] = React.useState(null);

  console.log(items);
  React.useEffect(() => {
    axios.get(`https://61efda37732d93001778e635.mockapi.io/flowers/${id}`).then(resp => {
      const item = resp.data;
      setTtems(item);
    });
  }, [id]);

  return (
    <>
      {items && (
        <div className="itemWraper">
          <div className="itemcart" id={items.id}>
            <h1>{items.category}</h1>
            <h2>{items.title}</h2>
            <span>{items.price} руб.</span>
            <h3>Информация</h3>
            <p className="infoText">{items.description}</p>

            <div className="buyAddbtn">
              <button className="buy">Заказать</button>
              <button className="add">Добавить в корзину</button>
            </div>
          </div>
          <div className="itemImage">
            <img src={items.image} alt="" />
          </div>
        </div>
      )}
      <ShemWork />
    </>
  );
}

export default Item;
