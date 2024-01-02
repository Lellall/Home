import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { NotificationCard } from "./components";
import { ViewportWidth } from "../../utils/enums";

const MainContainer = styled(Box)`
  display: flex !important;
  padding: 30px 0px !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 20px !important;
  flex: 1 0 0 !important;
  align-self: stretch !important;

  .main {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 30px !important;
  }

  .details {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 10px !important;

    .unread {
      display: flex !important;
      padding: 0px 10px !important;
      flex-direction: column !important;
      align-items: flex-end !important;
      gap: 10px !important;
      align-self: stretch !important;

      div {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 10px !important;

        .circle {
          width: 7px !important;
          height: 7px !important;
          border-radius: 34px !important;
          background: #f06d06 !important;
        }

        p {
          color: #aaa !important;
          font-feature-settings: "clig" off, "liga" off !important;
          font-family: Raleway !important;
          font-size: 22px !important;
          font-style: normal !important;
          font-weight: 700 !important;
          line-height: 28px !important;
          text-transform: capitalize !important;
          margin: 0 !important;
        }
      }
    }

    .info {
      display: flex !important;
      padding: 10px 15px !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 10px !important;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 21.468px 0px !important;
    gap: 14.312px !important;

    .main {
      gap: 20px !important;
    }

    .details {
      padding: 0 15px !important;

      .unread {
        padding: 8px !important;

        div {
          gap: 8px !important;

          p {
            font-size: 15.743px !important;
            line-height: 20.036px !important;
          }
        }
      }

      .info {
        padding: 7.156px 10.734px !important;
        gap: 7.156px !important;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 10px 15px !important;
    align-items: flex-start !important;
    gap: 10px !important;

    .main {
      gap: 10px !important;
    }

    .details {
      padding: 0 !important;

      .unread {
        padding: 0 10px 0 !important;
      }
    }
  }
`;

const HeadingText = styled(Typography)`
  color: #2f313f !important;
  text-align: center !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 34px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 46px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 16px !important;
    line-height: 22px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    display: none !important;
  }
`;

const Main = () => {
  const data = [
    {
      id: 1,
      text: "Your package is on its way. Approximately 2miles Away.",
      time: "2 mins ago",
    },
    {
      id: 2,
      text: "Your package is here. Please scan and collect your package from the courier.",
      time: "12 mins ago",
    },
    {
      id: 3,
      text: "Your package is here. Please scan and collect your package from the courier.",
      time: "12 mins ago",
    },
    {
      id: 4,
      text: "Your package is here. Please scan and collect your package from the courier.",
      time: "12 mins ago",
    },
    {
      id: 5,
      text: "Your package is here. Please scan and collect your package from the courier.",
      time: "12 mins ago",
    },
    {
      id: 6,
      text: "Your package is here. Please scan and collect your package from the courier.",
      time: "14 mins ago",
    },
  ];
  return (
    <MainContainer>
      <div className="main">
        <HeadingText>Notifications</HeadingText>
        <div className="details">
          <div className="unread">
            <div>
              <div className="circle"></div>
              <p>1 Unread</p>
            </div>
          </div>
          <div className="info">
            {data.map((d, i) => (
              <NotificationCard
                key={d.id}
                text={d.text}
                time={d.time}
                isUnRead={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
