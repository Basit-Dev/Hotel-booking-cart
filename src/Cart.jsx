import React, { useState } from "react";
import HotelCard from "./Hotelcard";

export default function Cart() {
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [room, setRoom] = useState();
  const [row, setRow] = useState([]);

  const addItem = function (hotelData) {
    if (hotelData[3] > 0) {
      setPrice(hotelData[2] + price);
      setQty(hotelData[1] + qty);
      setRoom(hotelData[3] - 2);
      setRow(row);
      row.push(hotelData);
      console.log(room);
    } else {
      console.log("NO ROOM,S" + hotelData);
    }
  };

  return (
    <>
      <div className="cart-container">
        <HotelCard child={addItem} />
        <div
          style={{ marginTop: "40px", fontSize: "16px", fontWeight: "bold" }}
        >
          CART
        </div>
        <table>
          <tbody>
            <tr>
              <th>Hotel Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
            {row.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{data[0]}</td>
                  <td>{data[1]}</td>
                  <td>£{data[2]}</td>
                </tr>
              );
            })}
            <th>Total</th>
            <th>{qty}</th>
            <th>£{price}</th>
          </tbody>
        </table>
      </div>
    </>
  );
}
