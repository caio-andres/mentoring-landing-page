import styled from "styled-components";
import breakpoint from "../../styles/breakpoints.ts";

export const MenuHide = styled.a`
  @media ${breakpoint.lg} {
    display: none;
  }
`;

export const MenuHideAbout = styled.a`
  @media ${breakpoint.md} {
    display: none;
  }
`;

export const MenuHideStart = styled.nav`
  @media ${breakpoint.xs} {
    display: none !important;
  }
`;

export const DivResponsive = styled.div`
  @media ${breakpoint.sm} {
    margin: 1px !important;
  }
`;
