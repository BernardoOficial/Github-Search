import styled from 'styled-components';

const Input = ({ className, setUsername }) => {

  const handleChangeInput = (evento) => setUsername(evento.target.value);

  return (
    <input
      className={className}
      type="text"
      placeholder="Username"
      onChange={handleChangeInput}
    />
  );
};

const SearchInput = styled(Input)`
  margin-top: 60px;
  width: 300px;
  height: 40px;

  padding: 10px;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};

  color: ${({ theme }) => theme.colors.textoPreto};
  background-color: ${({ theme }) => theme.colors.terceiro};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;

  transition: 0.3s ease-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secundo},
      0 0 0 4px ${({ theme }) => theme.colors.terceiro};
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default SearchInput;