import Grid from "@mui/material/Grid";
import { HeadingContainer, HeadingText, GridContainer } from "./profile.styles";
import { ProfileCard } from "../components";

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
