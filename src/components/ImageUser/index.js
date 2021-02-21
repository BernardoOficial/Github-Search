import styled from 'styled-components';

const ImageUser = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secundo},
    0 0 0 5px ${({ theme }) => theme.colors.terceiro};
`;

export default ImageUser;