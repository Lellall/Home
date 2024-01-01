import { useState } from "react";

import {
  HeadingContainer,
  HeadingText,
  TabContainer,
  StyledButton,
  EmptyState,
  MainContainer,
} from "./orders.styles";
const Main = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const options = ["Pending (2)", "Completed (0)"];

  const data = false;
  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>Orders (2)</HeadingText>
      </HeadingContainer>
      <TabContainer>
        {options.map((d, i) => (
          <StyledButton
            key={i}
            onClick={() => setCurrentTab(i + 1)}
            active={currentTab === i + 1}
          >
            {d}
          </StyledButton>
        ))}
      </TabContainer>
      <>
        {data ? (
          <div>Hey there</div>
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
