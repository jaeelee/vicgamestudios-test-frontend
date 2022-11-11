import styled from "styled-components";
import "styles/base/_variables.ts";
import { size } from "./base/_variables";

export const Main = styled.main`
  grid-area: main;
  min-width: ${size.tabletMax};
`;

export const Section = styled.section`
  padding: 100px 50px;
`;

export const Table = styled.table`
  width: 100%;
`;
