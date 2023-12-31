import styled from "styled-components";

import { ViewportWidth } from "../../../../utils/enums";

export const BannerBg = styled.div`
  background: url("https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgray;
  position: relative;
  height: 480px;
  width: 100%;
  object-fit: cover;

  @media (max-width: ${ViewportWidth.md}px) {
    height: 300px;

  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: 150px;
  }
`;
export const SubBanner = styled.div`
  background: url("/assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgray;
  position: relative;
  height: 8.4375rem;
  width: 100%;
  object-fit: contain;

  @media (max-width: ${ViewportWidth.md}px) {
    height: 112px;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: 60px;
  }
`;
