import React from "react";

export default function AddCartBtn({ props }) {
  return (
    <>
      <button onClick={() => props(50)}>Add to cart two</button>
    </>
  );
}
