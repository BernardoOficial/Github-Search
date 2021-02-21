import { Component } from 'react';
import styled from 'styled-components';
import image from '../../assets/images/github-search.svg';

const GithubImage = styled.svg`
    background-image: url(${image});
    background-repeat: no-repeat;
    
    width: 197px;
    height: 242px;
    display: inline-block;
    border: none;
`

export default GithubImage;