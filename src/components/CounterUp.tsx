import React, { useEffect, useState } from "react";

const CounterUp: React.FC<{ number: any }> = ({ number }) => {
  const [counterUp, setCountUp] = useState<any>();

  const animatedCounterUp = () => {
    for (let count = number - 1000; count <= number; count++) {
      setTimeout(() => setCountUp(count), 2000);
    }
  };
  useEffect(() => animatedCounterUp());
  return <span>{counterUp}</span>;
};

export default CounterUp;
