import React, { useState } from "react";

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1);
  };
  const returnNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <p>{number}</p>;<button onClick={addNumber}>Add number</button>;
      <button onClick={returnNumber}>delete number</button>;
    </div>
  );
};
