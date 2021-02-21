import styled from "styled-components";

const Main = styled.main`
  margin-top: 80px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;

  @media (max-width: 440px) {
    column-gap: 0px;
    grid-template-columns: auto;
  }
`;

export default Main;