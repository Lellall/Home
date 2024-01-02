/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { EmptyWallet } from "iconsax-react";
import { ViewportWidth } from "../../../utils/enums";

const Item = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 8px !important;
  flex: 1 0 0 !important;
  align-self: stretch !important;
  border-radius: 4px !important;
  border: 1px solid rgba(236, 236, 236, 0.93) !important;
  height: 160px !important;

  .main {
    display: flex !important;
    padding: 8px 16px !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: flex-start !important;
    gap: 8px !important;
    align-self: stretch !important;
    border-bottom: 1px solid rgba(236, 236, 236, 0.93) !important;
  }

  .details {
    display: flex !important;
    padding: 16px !important;
    justify-content: space-between !important;
    align-items: center !important;
    align-self: stretch !important;
  }

  .info {
    display: flex !important;
    align-items: flex-start !important;
    gap: 10px !important;

    img {
      width: 46.257px !important;
      height: 46.261px !important;
      border-radius: 46.261px !important;
    }

    .sub-details {
      display: flex !important;
      flex-direction: column !important;
      align-items: flex-start !important;

      .small {
        color: #aaa !important;
        font-feature-settings: "clig" off, "liga" off !important;
        font-family: Open Sans !important;
        font-size: 14px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        line-height: 24px !important;
        margin: 0;
      }
    }
  }

  .add-info {
    color: #f06d06 !important;
    font-feature-settings: "clig" off, "liga" off !important;
    font-family: Open Sans !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 24px !important;
    display: flex !important;
    align-items: flex-start !important;
    gap: 10px !important;

    span {
      display: inline-flex;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    height: 125px !important;
    gap: 5.725px !important;
    border-radius: 2.862px !important;
    border: 0.716px solid rgba(236, 236, 236, 0.93) !important;

    .main {
      padding: 5.725px 11.449px !important;
      gap: 5.725px !important;
      border-bottom: 0.716px solid rgba(236, 236, 236, 0.93) !important;
    }

    .details {
      padding: 11.449px !important;
    }

    .info {
      align-items: center !important;
      gap: 7.156px !important;

      img {
        width: 32.38px !important;
        height: 32.383px !important;
        border-radius: 32.383px !important;
      }

      .sub-details {
        .small {
          font-size: 10px !important;
          line-height: 17.174px !important;
        }
      }
    }

    .add-info {
      font-size: 10px !important;
      line-height: 17.174px !important;
      align-items: center !important;
      gap: 7.156px !important;
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    .info {
      img {
        width: 27.754px !important;
        height: 27.756px !important;
        border-radius: 27.756px !important;
      }
      .sub-details {
        .small {
          font-size: 14px !important;
          line-height: 24px !important;
        }
      }
    }

    .add-info {
      font-size: 12px !important;
      line-height: 24px !important;
    }
  }
`;

const HeadingText = styled(Typography)`
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 30px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 14px !important;
    line-height: 21.468px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`;

const SubText = styled(Typography)`
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 22px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 12px !important;
    line-height: 15.743px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 16px !important;
    line-height: 22px !important;
  }
`;
const Main = ({
  title,
  showImage = false,
  subText,
  imageSrc,
  smallText,
  subItems,
  showIcon = false,
}) => {
  return (
    <Item>
      <div className="main">
        <HeadingText>{title}</HeadingText>
      </div>
      <div className="details">
        <div className="info">
          {showImage && <img src={imageSrc} alt="" />}
          {showIcon && <EmptyWallet size={20} />}
          <div className="sub-details">
            {subText && <SubText>{subText}</SubText>}
            <p className="small">{smallText}</p>
          </div>
        </div>
        <div className="add-info">
          {subItems?.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </Item>
  );
};

export default Main;
