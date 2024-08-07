import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ProfileCard } from "./components";
import { ViewportWidth } from "../../utils/enums";
import { useEffect, useState } from "react";
import { getItemFromLocalForage } from "../../utils/getItem";
import useAuth from "../../app/useAuth";
import { EmptyState } from "./my-orders/orders.styles";
import { LockCircle } from "iconsax-react";

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
  const [user, setUser] = useState("");
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedItem = await getItemFromLocalForage("user");
        setUser(storedItem);
      } catch (error) {
        console.error("Error retrieving item:", error);
      }
    };

    fetchData();
  }, []);
  console.log(user, "nuserav");
  const data = [
    {
      id: 1,
      title: "Account Details",
      subText: `${user?.firstName} ${user?.lastName}`,
      imageSrc: "",
      subItems: [""],
      smallText: user?.username,
    },
    {
      id: 2,
      title: "Shipping Address",
      subText: "Default Shipping Address",
      imageSrc: "",
      subItems: [<button>Add Address</button>],
      smallText: "You have no available address",
    },
  ];
  return (
    <>
      <HeadingContainer>
        <HeadingText>Account Overview</HeadingText>
      </HeadingContainer>
      {!isAuthenticated ? (
        <EmptyState>
          <LockCircle size="62" color="#FF8A65" />
          <div className="text-container">
            <p className="bold">Please login to continue</p>
            <p>Access Restricted: Login Required</p>
          </div>
        </EmptyState>
      ) : (
        data?.map((d, i) => (
          <GridContainer>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={12} key={d.id}>
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
            </Grid>
          </GridContainer>
        ))
      )}
    </>
  );
};

export default Main;
