/* eslint-disable react/prop-types */
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Typography, Container } from "@mui/material";
import { SubText } from "./CustomerType";
import { StyledImage } from "./Container/Container";

const ModSubText = styled(SubText)`
  margin-left: 0 !important;
`;

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
    max-width: 220px !important;
    height: 150px;
    padding: 14px;
  }

  @media (max-width: 600px) {
    max-width: 230px !important;
    max-height: 120px !important;
    margin: 0 auto;
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
    padding: 40px 0px !important;
    gap: 20px !important;
  }

  @media (max-width: 768px) {
    padding: 20px 0px !important;
    width: 100% !important;
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
      <Grid container spacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        {services.map((service) => (
          <Grid key={service.id} xs={12} sm={4} lg={4} md={4}>
            <ServiceContainer>
              <ColContainer>
                <Text color="#2F313F">{service.title}</Text>
                <ModSubText
                  style={{ marginLeft: "0" }}
                  color="rgba(18, 29, 43, 0.60)"
                >
                  {service.subtext}
                </ModSubText>
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
                  mobileWidth="100px"
                  mobileHeight="60px"
                />
              </ImageContainer>
            </ServiceContainer>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Services;
