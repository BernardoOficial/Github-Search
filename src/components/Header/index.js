import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  margin-top: 20px;

  display: grid;
  grid-template-columns: 200px 2fr 4fr;
  align-items: center;
  column-gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    column-gap: 0px;
    row-gap: 20px;
  }
`;

export default Header;