import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Background from '../components/Background';
import Wrapper from '../components/Wrapper';
import fetchUser from '../fetchUser/fetchUser';

const Perfl = () => {

    const [userDados, setDadosUser] = useState([]);

    const { user } = useParams();

    useEffect(async () => {
        const response = await fetchUser(user);
        setDadosUser(response);
    }, [])

    console.log(userDados);

    return (
      <Background>
        <Wrapper>
          <img src={userDados.avatar_url} placeholder={userDados.name} />
          <h1>Perfil: {userDados.login}</h1>
          <h1>Bio: {userDados.bio}</h1>
          <h1>Company: {userDados.company}</h1>
          <h1>Followers: {userDados.followers}</h1>
          <h1>Following: {userDados.following}</h1>
          <h1>Location: {userDados.location}</h1>
          <h1>Name: {userDados.name}</h1>
        </Wrapper>
      </Background>
    );
}

export default Perfl;