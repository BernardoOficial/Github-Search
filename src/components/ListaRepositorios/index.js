import styled from "styled-components";
import { Code, Star } from "@material-ui/icons"
import { ReactComponent as Forks } from '../../assets/images/forks-icon.svg';

const Lista = ({ className, repositorios }) => {

    console.log(repositorios);

    return (
      <>
        {repositorios.map((item, index) => (
          <section className={className} key={index}>
            <div>
              <h1>{item.name}</h1>
              <p className="descricao">{item.description}</p>
            </div>

            <div className="info-projeto">
              <p className="info-projeto__fork">Fork: {item.fork ? 'sim' : 'não'}</p>
              <p className="info-projeto__forks"><Forks /> {item.forks}</p>
              <p className="info-projeto__language"><Code /> {item.language}</p>
              <p className="info-projeto__stars"><Star /> {item.stargazers_count}</p>
            </div>
          </section>
        ))}
      </>
    );
}

const ListaRepositorios = styled(Lista)`
  width: 100%;
  height: 150px;
  padding: 15px;

  background-color: #232324;
  color: ${({ theme }) => theme.colors.terceiro};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.secundo};
    font-weight: 700;
    margin-bottom: 7px;
  }

  .descricao {
    font-size: 1.1rem;
    line-height: 1.7rem;
    letter-spacing: 0.2px;
  }

  .info-projeto {
    margin-top: 12px;
    display: flex;

    font-size: 1.1rem;
    line-height: 1.7rem;
    letter-spacing: 0.2px;
    font-weight: 700;

    p {
      margin: 0 10px;
      display: flex;
      align-items: center;

      &:first-child {
        margin-left: 0;
      }

      svg {
        color: ${({ theme }) => theme.colors.secundo};
        margin-right: 5px;
      }
    }
  }
`;

export default ListaRepositorios;