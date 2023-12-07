import { CgSearch } from "react-icons/cg";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { useResponsiveValue } from "../../../../lib/use-responsive-value";
import {
  MainContainer,
  Wrapper,
  InputContainer,
  Input,
  Nav,
  ColContainer,
  StyledSelect,
  SubText,
  Profile,
  SubContainer,
  ShopNav,
  MobileNav,
} from "./navbar.styles";

const Main = () => {
  const active = false;
  const data = ["Store", "Vendors", "Couriers"];
  const isMobile = useResponsiveValue({
    sm: true,
    md: false,
  });
  return (
    <>
      {isMobile ? (
        <Wrapper>
          <MobileNav>
            <img
              src="/assets/lellall-colored.svg"
              alt="Logo"
              className="logo"
            />

            <div className="container">
              <img
                src="/assets/shopping-cart.svg"
                alt="cart"
                className="cart"
              />
              <RxHamburgerMenu className="menu" />
            </div>
          </MobileNav>
          <div className='input-container'>
          <InputContainer>
              <div className="input">
                <CgSearch className="icon" />
                <Input placeholder="Search" />
              </div>
            </InputContainer>
            <SubContainer>
            {data.map((d, i) => (
              <ShopNav key={i} active={i === 0}>
                {d}
              </ShopNav>
            ))}
          </SubContainer>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <MainContainer>
            <img
              src="/assets/lellall-colored.svg"
              alt="Logo"
              className="logo"
            />

            <InputContainer>
              <div className="input">
                <CgSearch className="icon" />
                <Input placeholder="Search" />
              </div>
            </InputContainer>

            <Nav>
              <ColContainer>
                <SubText>Delivery to</SubText>
                <StyledSelect name="location">
                  <option>Abuja</option>
                </StyledSelect>
              </ColContainer>
              <img
                src="/assets/shopping-cart.svg"
                alt="cart"
                className="cart"
              />

              <Profile>
                {active ? (
                  <div className="active">
                    <RxAvatar />
                    <p>Hi Jane</p>
                  </div>
                ) : (
                  <div className="inactive">
                    <RxAvatar className="icon" />
                    <p>Sign In</p>
                  </div>
                )}
              </Profile>
            </Nav>
          </MainContainer>
          <SubContainer>
            {data.map((d, i) => (
              <ShopNav key={i} active={i === 0}>
                {d}
              </ShopNav>
            ))}
          </SubContainer>
        </Wrapper>
      )}
    </>
  );
};

export default Main;
