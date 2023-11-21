import styled, { createGlobalStyle } from 'styled-components';

// Global styles
export const GlobalStyle = createGlobalStyle`
  ${'' /* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap"); */}
`;

// Container style
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top:  -10px;
  background: #004225;
`;

// Card style
export const Card = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
`;

// Box style
export const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #004225;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: translateY(-50px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
  }
`;

// Content style
export const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

// Heading 2 style
export const Heading2 = styled.h2`
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
`;

// Heading 3 style
export const Heading3 = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
`;

// Paragraph style
export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
`;

// Link style
export const Link = styled.a`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: orange;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
  }
`;

// Usage example
const MissonCards = () => {
  return (
    <>
      <GlobalStyle />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#004225" fill-opacity="1" d="M0,64L1440,256L1440,320L0,320Z"></path>
</svg>
      <Container>
      
        <Card>
          <Box>
            <Content>
              <Heading2>01</Heading2>
              <Heading3>EMPOWERING LOCAL & SMALL BUSINESSES.

</Heading3>
              <Paragraph>
              support a community-driven marketplace dedicated to uplifting local businesses. at lellall, we prioritize and empower small enterprises.              </Paragraph>
              <Link href="#">Read More</Link>
            </Content>
          </Box>
        </Card>

        <Card>
          <Box>
            <Content>
              <Heading2>02</Heading2>
              <Heading3>INNOVATIVE MARKETPLACE EXPERIENCE.

</Heading3>
              <Paragraph>
              explore a cutting-edge platform designed to revolutionize the way you shop, connect, and discover. discover a seamless and innovative marketplace experience that goes beyond the ordinary.


              </Paragraph>
              <Link href="#">Read More</Link>
            </Content>
          </Box>
        </Card>

        <Card>
          <Box>
            <Content>
              <Heading2>03</Heading2>
              <Heading3>SECURE SHOPPING, TRUSTED TRANSACTIONS.

</Heading3>
              <Paragraph>
              at lellall, we prioritize your security. enjoy a robust and sophisticated infrastructure for a seamless, worry-free online shopping experience.


              </Paragraph>
              <Link href="#">Read More</Link>
            </Content>
          </Box>
        </Card>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#004225" fill-opacity="1" d="M0,64L1440,256L1440,0L0,0Z"></path>
</svg>
    </>
  );
};

export default MissonCards;
