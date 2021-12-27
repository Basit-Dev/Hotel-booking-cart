import React, { useState } from "react";
import hotelData from "./hotelData";

export default function HotelCard({ child }) {
  const [room, setRoom] = useState(hotelData);

  const decrementQty = function (roomId, roomLeft) {
    room.map((data) => {
      if (roomId === data.id) {
        if (data.rooms <= 0) {
          data.rooms = 0;
        } else {
          setRoom(data.rooms--);
        }
      }
      setRoom(room);
      return true;
    });
  };

  return (
    <>
      <div className="hotel-container">
        {room.map((data) => {
          return (
            <div className="hotel-card" key={data.id}>
              <h2>{data.name}</h2>
              <p>{data.city}</p>
              <p>{data.rooms} rooms available</p>
              <p>£{data.price}</p>
              <button
                onClick={() =>
                  child(
                    [data.name, 1, data.price, data.rooms],
                    decrementQty(data.id)
                  )
                }
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}