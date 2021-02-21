import styled from 'styled-components';

const Background = styled.div`
    background-color: ${({theme}) => theme.colors.primeiro};

    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: ${({alignItems}) => alignItems ? 'center' : 'flex-start' }
`

export default Background;