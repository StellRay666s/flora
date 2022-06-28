import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ShemWork from "../components/ShemWork";

function Item() {
  const { id } = useParams();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://61efda37732d93001778e635.mockapi.io/flowers/${id}`).then(response => {
      setData(response.data);
    });
  }, [id]);

  return (
    <>
      {data && (
        <div className="itemWraper">
          <div className="itemcart" id={data.id}>
            <h1>{data.category}</h1>
            <h2>{data.title}</h2>
            <span>{data.price} руб.</span>
            <h3>Информация</h3>
            <p className="infoText">{data.description}</p>

            <div className="buyAddbtn">
              <button className="buy">Заказать</button>
              <button className="add">Добавить в корзину</button>
            </div>
          </div>
          <div className="itemImage">
            <img src={data.image} alt="" />
          </div>
        </div>
      )}
      <ShemWork />
    </>
  );
}

export default Item;
