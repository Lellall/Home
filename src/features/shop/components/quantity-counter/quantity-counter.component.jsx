/* eslint-disable react/prop-types */
import {
  MainContainer,
  Quantity,
  Counter,
  Controls,
  CountValue,
} from "./quantity-counter.styles";
const QuantityCounter = ({ value, increment, decrement }) => {
  return (
    <MainContainer>
      <Quantity>Qty:</Quantity>
      <Counter>
        <Controls onClick={decrement}>-</Controls>
        <CountValue>{value}</CountValue>
        <Controls onClick={increment}>+</Controls>
      </Counter>
    </MainContainer>
  );
};

export default QuantityCounter;
