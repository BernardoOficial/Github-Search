import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchData from "../data/fetchData/fetchData";

import Background from "../components/Background";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import ImageUser from "../components/ImageUser";
import InfosUser from "../components/InfosUser";
import EstatisticasUser from "../components/EstatisticasUser";

import Main from "../components/Main";
import ListaRepositorios from "../components/ListaRepositorios";

const Perfl = () => {
  const [userDados, setDadosUser] = useState([]);
  const [userRepositorios, setUserRepositorios] = useState([]);
  const { user } = useParams();

  const pegarDadosDoUsuario = async () => {
    const urlUser = `https://api.github.com/users/${user}`;
    const response = await fetchData(urlUser);
    setDadosUser(response);
  };

  const pegarRepositoriosDoUsuario = async () => {
    const urlUserRepositorios = `https://api.github.com/users/${user}/repos`;
    const response = await fetchData(urlUserRepositorios);
    setUserRepositorios(response);
  };

  useEffect(pegarDadosDoUsuario, []);
  useEffect(pegarRepositoriosDoUsuario, []);

  const estadoInicial = "Não definido";
  const {
    avatar_url,
    name,
    location,
    bio,
    company,
    followers,
    following,
    public_repos,
  } = userDados;

  // console.log(userDados);
  // console.log(userRepositorios);

  return (
    <Background>
      <Wrapper>
        <Header>
          <ImageUser src={avatar_url} placeholder={name} />
          <InfosUser
            nome={name}
            localizacao={location || estadoInicial}
            bio={bio || estadoInicial}
            empresa={company || estadoInicial}
          />
          <EstatisticasUser
            seguidores={followers}
            seguindo={following}
            totalRepositorios={public_repos}
          />
        </Header>
        <Main>
          <ListaRepositorios repositorios={userRepositorios} />
        </Main>
      </Wrapper>
    </Background>
  );
};

export default Perfl;
