import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ProfileCard } from "./components";
import { ViewportWidth } from "../../utils/enums";

const HeadingContainer = styled(Box)`
  display: flex !important;
  padding: 16px !important;
  align-items: center !important;
  gap: 8px !important;
  align-self: stretch !important;
  border-bottom: 1px solid rgba(236, 236, 236, 0.93) !important;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 11.449px !important;
    gap: 5.725px !important;
    border-bottom: 0.716px solid rgba(236, 236, 236, 0.93) !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    display: none !important;
  }
`;

const HeadingText = styled(Typography)`
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 28px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 16px !important;
    line-height: 22px !important;
  }
`;

const GridContainer = styled(Box)`
  padding: 0px 16px 30px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 0px 11.449px 21.468px !important;
  }
`;

const Main = () => {
  const data = [
    {
      id: 1,
      title: "Account Details",
      subText: "Jane Doe",
      imageSrc: "",
      subItems: ["Edit"],
      smallText: "janedoe@gmail.com",
    },
    {
      id: 2,
      title: "Shipping Address",
      subText: "Default Shipping Address",
      imageSrc: "",
      subItems: ["Add Address"],
      smallText: "You have no available address",
    },
    {
      id: 3,
      title: "Léllall Wallet",
      subText: "₦2,400",
      imageSrc: "",
      subItems: ["Fund Wallet", "History"],
      smallText: "",
    },
    {
      id: 4,
      title: "Newsletter Subscription",
      subText: "",
      imageSrc: "",
      subItems: ["Subscribe"],
      smallText: "You are currently not subscribed to any of our newsletters.",
    },
  ];
  return (
    <>
      <HeadingContainer>
        <HeadingText>Account Overview</HeadingText>
      </HeadingContainer>
      <GridContainer>
        <Grid container spacing={2}>
          {data?.map((d, i) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={d.id}>
              <ProfileCard
                title={d.title}
                showImage={i === 0}
                subText={d.subText}
                subItems={d.subItems}
                imageSrc={d.imageSrc}
                smallText={d.smallText}
                showIcon={i === 2}
              />
            </Grid>
          ))}
        </Grid>
      </GridContainer>
    </>
  );
};

export default Main;
