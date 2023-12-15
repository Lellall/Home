import { useState } from "react";
export const useCounter = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((c) => c + 1);
  const decrement = () => {
    if (value === 1) return;
    return setValue((c) => c - 1);
  };

  return { value, increment, decrement };
};
