import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
`;

const Card = styled.div`
  transition: transform 0.7s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 500px;
  margin: 10px auto;
  text-align: center;
  font-family: arial;
  background: url('https://bhmng.com/wp-content/uploads/2021/11/SHOPRITE-7-scaled-1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  
  width: 250px;
  height: 250px;

  &:hover {
    transform: scale(1.08);
  }
`;

const Img = styled.img`
  position: fixed;
  top: -8%;
  left: 0%;
  border-radius: 50px;
  opacity: 0.9;
  transition: 0.5s;

  ${Card}:hover & {
    opacity: 1;
    transform: scale(1.4);
  }
`;

const Header = styled.header`
  position: absolute;
  top: 120%;
  left: 0%;
  padding: 1px;
  border-radius: 25px;
  width: 450px;
  height: 90px;
  transition: all 0.5s;
  opacity: 0;

  ${Card}:hover & {
    opacity: 1;
    width: 450px;
    height: 90px;
    transform: translateY(-120px);
  }
`;

const App = () => {
  return (
    <CenteredContainer>
      <Card>
        
      </Card>
      <Card>
        
      </Card>
      <Card>
        
      </Card>
      <Card>
        
      </Card>
    </CenteredContainer>
  );
};

export default App;
