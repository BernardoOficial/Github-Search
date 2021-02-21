import styled from "styled-components";

import { Group, PeopleOutline, ListAlt } from '@material-ui/icons';

const Estatisticas = ({ className, seguidores, seguindo, totalRepositorios }) => {
    return (
      <section className={className}>
        <div>
          Seguidores:
          <p>
            <Group /> {seguidores}
          </p>
        </div>
        <div>
          Seguindo:
          <p>
            <PeopleOutline />
            {seguindo}
          </p>
        </div>
        <div>
          Total de repositórios:
          <p>
            <ListAlt /> {totalRepositorios}
          </p>
        </div>
      </section>
    );
}

const EstatisticasUser = styled(Estatisticas)`
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.textoBranco};
  text-align: center;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 10px;

  justify-content: center;

  @media (max-width: 420px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
  }

  div {
    width: 180px;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.secundo};
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textoPreto};
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background: ${({ theme }) => theme.colors.terceiro};
    }

    p {
      margin-top: 10px;
      display: flex;
      align-items: center;
      font-size: 3rem;
      line-height: 3.6rem;
      color: ${({ theme }) => theme.colors.textoPreto};
    }

    svg {
      color: ${({ theme }) => theme.colors.textoPreto};
      margin-right: 10px;
      font-size: 3rem;
    }
  }
`;

export default EstatisticasUser;