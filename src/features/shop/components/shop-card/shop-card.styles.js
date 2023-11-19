import styled from "styled-components";

export const Shops = styled.div`
  display: flex !important;
  flex-direction: row !important;
  padding: 0px 80px 40px 80px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
`;

export const ShopDetails = styled.div`
  display: flex;
  padding: 28px 18px !important;
  align-items: flex-start;
  gap: 18px;
  border-radius: 8px;
  border: 1.763px solid #f0f0f0;
  background: #fff;
  box-shadow: 8.81344px 12.33882px 35.25377px 0px rgba(32, 56, 85, 0.08);
`;

export const Shop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21.152px;
  width: 265px !important;

  p {
    margin: 0;
  }

  .details {
    display: flex;
    width: 266.166px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8.813px;

    .name {
      color: #2f313f;
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.915px;
    }
    .rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }
    .category {
      color: rgba(18, 29, 43, 0.6);
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Open Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.915px;
    }
  }
`;
export const ShopImage = styled.div`
  width: 265px;
  height: 265px;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;

  .status {
    display: flex;
    padding: 8.813px 17.627px;
    align-items: flex-start;
    gap: 17.627px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 7.051px 7.051px 7.051px;
    background: var(--secondary-background-color, #f3f3f8);

    p {
      color: ${(props) => (props.isOpen ? "#00A661" : "#E41749")};
      text-align: right;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Raleway;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.915px;
    }
  }

  .fav {
    position: absolute;
    right: 24px;
    bottom: 18px;
    border-radius: 176.269px;
    background: #fff;

    display: flex;
    width: 70.508px;
    height: 70.508px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
  }
`;