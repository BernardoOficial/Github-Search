import styled from 'styled-components'

const Loading = styled.span`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;

  position: fixed;
  top: 50%;
  left: 50%;

  border: 5px solid ${({ theme }) => theme.colors.terceiro};
  border-top: ${({ theme }) => theme.colors.secundo};

  animation: rotate 2s linear infinite;

  @keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export default Loading