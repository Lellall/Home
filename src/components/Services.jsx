import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Typography, Container } from "@mui/material";
import styled from "styled-components";

// import { CenteredText, Heading } from "./Text/Text";
import { SubText } from "./CustomerType";
import { StyledImage } from "./Container/Container";

const ServiceContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  height: 130px;
  width: 300px !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 6px 10px 0px #2f313f1a;

  @media (max-width: 768px) {
    // width: 180px !important;
  }
`;
const Text = styled(Typography)`
  font-size: 24px !important;
  font-weight: 700 !important;
  line-height: 20px !important;
  @media (max-width: 768px) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  // width: 1439px;
  padding: 60px 0px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: #2f313f;
  background: #eafef1;
`;
// width="80%" margin="20px auto"

const ColContainer = styled(Container)`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 8px !important;
  align-self: flex-start !important;
  width: 60%;
  padding: 0 !important;
`;

export const CenteredText = styled(Typography)`
  text-align: center !important;
  font-size: 34px !important;
  font-weight: 700 !important;
  line-height: 46px !important;

  @media (max-width: 912px) {
  }
  @media (max-width: 768px) {
    font-size: ${(props) => (props.mobileSize ? props.mobileSize : "20px")} !important;
  }
`;

const GridContainer = styled.div`
  

  @media (max-width: 768px) {
    display: none;
  }
`
const FlexContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    width: 100%;
    overflow-x: scroll;
  }
`

// fontsize="24px" minFontsize="18px"
const Services = ({ services }) => {
  return (
    <Wrapper
    >
      <CenteredText>Our Services</CenteredText>
      <GridContainer>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid key={service.id} xs={4} lg={4}>
            <ServiceContainer>
              <ColContainer>
                <Text color="#2F313F">{service.title}</Text>
                <SubText color="rgba(18, 29, 43, 0.60)">
                  {service.subtext}
                </SubText>
              </ColContainer>
              <div
                style={{ alignSelf: "flex-end", height: "60%", width: "45%" }}
              >
                <StyledImage
                  src={service.imageUrl}
                  alt={service.title}
                  height="100%"
                  width="100%"
                  mobileWidth="100px"
                  mobileHeight="93px"
                />
              </div>
            </ServiceContainer>
          </Grid>
        ))}
      </Grid>
      </GridContainer>
      <FlexContainer>
      {services.map((service) => (
            <ServiceContainer key={service.id}>
              <ColContainer>
                <Text color="#2F313F">{service.title}</Text>
                <SubText color="rgba(18, 29, 43, 0.60)">
                  {service.subtext}
                </SubText>
              </ColContainer>
              <div
                style={{ alignSelf: "flex-end", height: "60%", width: "45%" }}
              >
                <StyledImage
                  src={service.imageUrl}
                  alt={service.title}
                  height="100%"
                  width="100%"
                  mobileWidth="100px"
                  mobileHeight="93px"
                />
              </div>
            </ServiceContainer>
        ))}
      </FlexContainer>
    </Wrapper>
  );
};

export default Services;
