import { useCounter } from "./use-quantity-counter";
import {
  MainContainer,
  Quantity,
  Counter,
  Controls,
  CountValue,
} from "./quantity-counter.styles";
const QuantityCounter = () => {
  const { value, increment, decrement } = useCounter(1);
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
