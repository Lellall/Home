import styled from 'styled-components';

const mainColor = '#f06d0657';
const accentColor = 'orange';
const hoverColor = 'orangeYellow';

export const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800,800i,900&display=swap');

`;

export const Container = styled.div`
  position: relative;
  margin:0 70px;
  display: flex;
  flex: 1;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin:20px 30px;
  }

`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 420px;
  background: #004225;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 5px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${accentColor};
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: 'Lellall';
    position: absolute;
    top: 70%;
    left: 20%;
    font-size: 4em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);
  }

  @media screen and (max-width: 768px) {
    margin:10px 0px;
  }
`;

export const ImgBx = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: 0.5s;

  ${Card}:hover & {
    top: 0%;
    transform: translateY(-25%);
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    width: 270px;
  }
`;

export const ContentBx = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 90;

  ${Card}:hover & {
    height: 210px;
  }

  h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
  }

  .size,
  .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;

    ${Card}:hover & {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.5s;
    }
  }

  .size h3,
  .color h3 {
    color: white;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${hoverColor};
    }
  }

  .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;

    &:nth-child(2) {
      background: ${accentColor};
    }

    &:nth-child(3) {
      background: #1B2FE9;
    }

    &:nth-child(4) {
      background: #080481;
    }
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;

    ${Card}:hover & {
      opacity: 1;
      transform: translateY(0px);
      transition-delay: 0.7s;
    }
  }
`;
const NewProducts = () => {
    return (
      <>
        <GlobalStyles />
  
        <Container>
          <Card>
            <ImgBx>
              <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" />
            </ImgBx>
            <ContentBx>
              <h2>Product Title</h2>
              <div className="size">
                <h3>Size:</h3>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <div className="color">
                <h3>Color:</h3>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="#">View Details</a>
            </ContentBx>
          </Card>
          <Card>
            <ImgBx>
              <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" />
            </ImgBx>
            <ContentBx>
              <h2>Product Title</h2>
              <div className="size">
                <h3>Size:</h3>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <div className="color">
                <h3>Color:</h3>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="#">View Details</a>
            </ContentBx>
          </Card>
          <Card>
            <ImgBx>
              <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" />
            </ImgBx>
            <ContentBx>
              <h2>Product Title</h2>
              <div className="size">
                <h3>Size:</h3>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <div className="color">
                <h3>Color:</h3>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="#">View Details</a>
            </ContentBx>
          </Card>
          <Card>
            <ImgBx>
              <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" />
            </ImgBx>
            <ContentBx>
              <h2>Product Title</h2>
              <div className="size">
                <h3>Size:</h3>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
              <div className="color">
                <h3>Color:</h3>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="#">View Details</a>
            </ContentBx>
          </Card>
        </Container>
      </>
    );
  };
  
  export default NewProducts;