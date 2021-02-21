import React from 'react';

import Wrapper from '../components/Wrapper';
import GithubImage from '../components/GithubImage';
import Background from '../components/Background';
import Formulario from '../components/Formulario';

const Home = () => {

    return (
      <Background alignItems >
        <Wrapper>
          <GithubImage />
          <Formulario />
        </Wrapper>
      </Background>
    );
}

export default Home;