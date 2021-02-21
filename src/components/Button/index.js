import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Button = styled.button`
  margin-top: 30px;
  width: 300px;
  height: 40px;

  padding: 10px;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secundo};

  color: ${({ theme }) => theme.colors.textoPreto};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-align: center;
  line-height: 2rem;

  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.terceiro};
    transform: translateY(-10px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.terceiro}77;
    transform: translateY(-10px);
    color: #ffffff;
  }
`;

export default Button;