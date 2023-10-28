/* eslint-disable react/prop-types */
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Container } from "@mui/material";
import { SubText } from "./CustomerType";
import { StyledImage } from "./Container/Container";

const ServiceContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  height: 180px;
  max-width: 300px !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 6px 10px 0px #2f313f1a;

  @media (max-width: 912px) {
    max-width: 240px !important;
    height: 150px;
  }

  @media (max-width: 768px) {
    max-width: 180px!important;
    max-height: 120px!important;
    padding: 14px;
  }
`;
const Text = styled(Typography)`
  font-size: 24px !important;
  font-weight: 700 !important;
  line-height: 20px !important;

  @media (max-width: 912px) {
    font-size: 18px !important;
  }

  @media (max-width: 768px) {
    font-size: 16px !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 60px 0px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: #2f313f;
  background: #eafef1;

  @media (max-width: 912px) {
    padding: 40px 10px !important;
    gap: 20px !important;
  }

  @media (max-width: 768px) {
    padding: 20px 10px !important;
    gap: 10px;
    width: 100% !important;
    overflow-x: hidden !important;
  }
`;

const ColContainer = styled(Container)`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 8px !important;
  align-self: flex-start !important;
  width: 65% !important;
  padding: 0 !important;
`;

export const CenteredText = styled(Typography)`
  text-align: center !important;
  font-size: 34px !important;
  font-weight: 700 !important;
  line-height: 46px !important;

  @media (max-width: 912px) {
    font-size: ${(props) =>
      props.tabletSize ? props.tabletSize : "24px"} !important;
  }
  line-height: 30px !important;
  }
  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.mobileSize ? props.mobileSize : "20px"} !important;
  }
`;

const GridContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const FlexContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    width: 100%;
    overflow-x: scroll;
  }
`;
const ImageContainer = styled.div`
  align-self: flex-end;
  height: 60%;
  width: 75%;

  @media (max-width: 768px) {
    width: 45%;
  }
`;
const Services = ({ services }) => {
  return (
    <Wrapper>
      <CenteredText>Our Services</CenteredText>
      <GridContainer>
        <Grid container spacing={{ xs: 2, md: 2, lg: 3}}>
          {services.map((service) => (
            <Grid key={service.id} xs={4} lg={4} md={4}>
              <ServiceContainer>
                <ColContainer>
                  <Text color="#2F313F">{service.title}</Text>
                  <SubText color="rgba(18, 29, 43, 0.60)">
                    {service.subtext}
                  </SubText>
                </ColContainer>
                <ImageContainer>
                  <StyledImage
                    src={service.imageUrl}
                    alt={service.title}
                    height="100%"
                    width="100%"
                    objectFit="contain"
                    tabletWidth="105px"
                    tabletHeight="93px"
                  />
                </ImageContainer>
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
            <ImageContainer>
              <StyledImage
                src={service.imageUrl}
                alt={service.title}
                mobileWidth="100px"
                mobileHeight="60px"
                objectFit="contain"
              />
            </ImageContainer>
          </ServiceContainer>
        ))}
      </FlexContainer>
    </Wrapper>
  );
};

export default Services;
