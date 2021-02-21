import styled from "styled-components";
import { Link } from "react-router-dom";
import { FirstPage } from "@material-ui/icons";

const Arrow = ({ className, href }) => {
  return (
    <Link className={className} to={href}>
      <FirstPage />
    </Link>
  );
};

const ArrowVoltar = styled(Arrow)`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.terceiro};
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundo};
  }

  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
  }

  svg {
    font-size: 3.5rem;
    line-height: 35px;
    color: ${({ theme }) => theme.colors.primeiro};

    @media (max-width: 500px) {
      font-size: 2.5rem;
      line-height: 25px;
    }
  }
`;

export default ArrowVoltar;
