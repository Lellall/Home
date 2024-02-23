import { useEffect, useState } from "react";

import {
  HeadingContainer,
  HeadingText,
  TabContainer,
  StyledButton,
  EmptyState,
  MainContainer,
} from "./orders.styles";
import OrderTable from "./orderTable";
import useOrderStore from "../../../app/orderStore";
const Main = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const options = ["Pending (2)", "Completed (0)"];
  const [filteredOrders, setFilteredOrders] = useState(null);

  const { addOrder, orders } = useOrderStore();
  const initStore = useOrderStore((state) => state.init);

  const filterOrders = (status) => {
    if (status === "PENDING") {
      setFilteredOrders(
        orders.filter((order) =>
          order.paymentItems.every((item) => item.status !== "COMPLETE")
        )
      );
    } else if (status === "COMPLETE") {
      setFilteredOrders(
        orders.filter((order) =>
          order.paymentItems.every((item) => item.status === "COMPLETE")
        )
      );
    }
  };
  useEffect(() => {
    // Initialize the store with data from localforage
    initStore();
    setFilteredOrders(orders);
  }, []);

  const pendingFN = () => {
    setCurrentTab(1);
    filterOrders("PENDING");
  };
  const completedFN = () => {
    setCurrentTab(2);
    filterOrders("COMPLETED");
  };

  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>Orders (2)</HeadingText>
      </HeadingContainer>
      <TabContainer>
        <StyledButton
          onClick={() => pendingFN()}
          active={currentTab === 1}
        >
         PENDING
        </StyledButton>
        <StyledButton
          onClick={() => completedFN()}
          active={currentTab === 2}
        >
         COMPLETED
        </StyledButton>
      </TabContainer>
      <>
        {filteredOrders ? (
          <OrderTable orders={filteredOrders} />
        ) : (
          <EmptyState>
            <img src="/assets/user-order.svg" alt="favorites" />
            <div className="text-container">
              <p className="bold">Nothing Yet!</p>
              <p>All your Closed Orders will be saved here.</p>
            </div>
          </EmptyState>
        )}
      </>
    </MainContainer>
  );
};

export default Main;
