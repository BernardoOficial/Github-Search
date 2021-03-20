import styled from 'styled-components';
import image from '../../assets/images/github-search.svg';

const GithubImage = styled.svg`
    background-image: url(${image});
    background-repeat: no-repeat;
    
    width: 197px;
    height: 242px;
    display: inline-block;
    border: none;

    animation: showRotate 0.5s linear forwards;

    @keyframes showRotate {
        from {
            transform: scale(0) rotate(0deg);
        }
        to {
            transform: scale(1) rotate(360deg);
        }
    }
`

export default GithubImage;