import styled from "styled-components";

const Main = styled.main`
  margin-top: 80px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: auto auto auto;
  }
  
  @media (max-width: 950px) {
    grid-template-columns: auto auto;
  }
  
  @media (max-width: 600px) {
    column-gap: 0px;
    grid-template-columns: auto;
  }
`;

export default Main;