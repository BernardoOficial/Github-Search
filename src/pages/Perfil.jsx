import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchData from "../data/fetchData/fetchData";

import Background from "../components/Background";
import Wrapper from "../components/Wrapper";
import ArrowVoltar from "../components/ArrowVoltar";
import Header from "../components/Header";
import ImageUser from "../components/ImageUser";
import InfosUser from "../components/InfosUser";
import EstatisticasUser from "../components/EstatisticasUser";
import Loading from "../components/Loading";

import Main from "../components/Main";
import ListaRepositorios from "../components/ListaRepositorios";

const Perfl = () => {
  const [estaCarregando, setEstaCarregando] = useState(false);
  const [userDados, setDadosUser] = useState([]);
  const [userRepositorios, setUserRepositorios] = useState([]);
  const { user } = useParams();

  const pegarDadosDoUsuario = () => {
    const urlUser = `https://api.github.com/users/${user}`;

    setEstaCarregando(true);

    fetchData(urlUser)
      .then((response) => {

        setTimeout(() => {
          setEstaCarregando(false);
          setDadosUser(response);
        }, 1500)
      })
      .catch((erro) => {
        console.log(erro);
      })
  };

  const pegarRepositoriosDoUsuario = () => {
    const urlUserRepositorios = `https://api.github.com/users/${user}/repos`;

    setEstaCarregando(true);

    fetchData(urlUserRepositorios)
      .then((response) => {

        setTimeout(() => {
          setEstaCarregando(false);
          setUserRepositorios(response);
        }, 1500)
      })
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

  return (
    <Background>
      <Wrapper>
        {estaCarregando ? (
          <Loading />
        ) : (
          <>
            
            <ArrowVoltar href="/" />
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
          </>
        )}
      </Wrapper>
    </Background>
  );
};

export default Perfl;
