import React from "react";
import styled from "styled-components";

import { LocationOn, Business, PermIdentity } from "@material-ui/icons";

const Infos = ({ className, nome, localizacao, bio, empresa }) => {
  return (
    <section className={className}>
      <h1>{nome}</h1>
      <p>
        <LocationOn /> {localizacao}
      </p>
      <p>
        <Business /> {empresa}
      </p>
      <p>
        <PermIdentity /> {bio}
      </p>
    </section>
  );
};

const InfosUser = styled(Infos)`
  h1 {
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secundo};
    margin-bottom: 30px;
  }

  p {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    color: ${({ theme }) => theme.colors.textoBranco};
    margin-bottom: 10px;
  }

  svg {
    margin-right: 8px;
    vertical-align: top;
    color: ${({ theme }) => theme.colors.secundo};
  }
`;

export default InfosUser;
