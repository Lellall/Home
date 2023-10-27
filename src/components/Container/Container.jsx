
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  color: ${(props) => (props.textcolor ? props.textcolor : "#2F313F")};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media (max-width: 768px) {
    padding: ${(props) => (props.minPadding ? props.minPadding : 0)};
    width: ${(props) => (props.minWidth ? props.minWidth : "100%")};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0 auto")};
  padding: ${(props) => (props.padding ? props.padding : "30px")};

  @media (max-width: 768px) {
    width: ${(props) => (props.minWidth ? props.minWidth : "100%")};
    padding: ${(props) => (props.minPadding ? props.minPadding : "12px")};
    flex-direction: ${(props) =>
      props.flexDirection ? props.flexDirection : "row"};
  }
`;

export const Container = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  margin: ${(props) => (props.margin ? props.margin : "0 auto")};
  padding: ${(props) => (props.padding ? props.padding : "30px")};

  @media (max-width: 768px) {
    width: ${(props) => (props.minWidth ? props.minWidth : "100%")};
  }
`;
export const ColContainer = styled(FlexContainer)`
  flex-direction: column;
  background: ${(props) => (props.bgColor ? props.bgColor : "#fff")}
`;

export const StyledImage = styled.img`
  height: ${(props) => (props.height ? props.height : "550px")};
  width: ${(props) => (props.width ? props.width : "550px")};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  // background: red !important;
  // object-fit: contain;
  object-fit: cover;

  @media (max-width: 912px) {
    width: ${(props) => (props.tabletWidth ? props.tabletWidth : "150px")};
    height: ${(props) => (props.tabletHeight ? props.tabletHeight : "150px")};
    display: ${(props) => (props.tabletDisplay ? props.tabletDisplay : "block")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "150px")};
    height: ${(props) => (props.mobileHeight ? props.mobileHeight : "150px")};
    margin: ${(props) => (props.mobileMargin ? props.mobileMargin : 0)};
    display: ${(props) => (props.mobileDisplay ? props.mobileDisplay : "block")};
    // object-fit: contain;
  }
`;

// export const calcViewMode = () => {
//   let viewWidth = window.innerWidth;
//   if (600 > viewWidth) {
//     return "mobile";
//   } else if (900 > viewWidth) {
//     return "tablet";
//   } else {
//     return "desktop";
//   }
// };

// export const Grid = styled.div`
// 	width: 100%;
// 	display: grid;
// 	grid-template-columns: ${(props) => props.default};
// 	${(props) =>
// 		props.pad &&
// 		css`
// 			padding: ${(props) => props.pad};
// 		`}
// 	${(props) =>
// 		props.margin &&
// 		css`
// 			margin: ${(props) => props.margin};
// 		`}
// 	${(props) =>
// 		props.background &&
// 		css`
// 			background: ${(props) => props.background};
// 		`}

// 	${(props) =>
// 		props.padHorizontal &&
// 		css`
// 			grid-column-gap: ${(props) => props.padHorizontal};
// 		`}

//   ${(props) =>
// 		props.padVertical &&
// 		css`
// 			grid-row-gap: ${(props) => props.padVerical};
// 		`}

//   grid-gap: ${(props) => props.gap};
// 	${(props) =>
// 		props.autoRow &&
// 		css`
// 			grid-auto-rows: ${(props) => props.autoRow};
// 		`}

// 	${(props) =>
// 		props.desktop &&
// 		calcViewMode() === 'desktop' &&
// 		css`
// 			grid-template-columns: ${(props) => props.desktop};
// 		`}
//   ${(props) =>
// 		props.tablet &&
// 		calcViewMode() === 'tablet' &&
// 		css`
// 			grid-template-columns: ${(props) => props.tablet};
// 		`}
//   ${(props) =>
// 		props.mobile &&
// 		calcViewMode() === 'mobile' &&
// 		css`
// 			grid-template-columns: ${(props) => props.mobile};
// 		`}
// `;