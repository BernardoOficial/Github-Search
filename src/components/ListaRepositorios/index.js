import styled from "styled-components";
import { Code, Star } from "@material-ui/icons"
import { ReactComponent as Forks } from '../../assets/images/forks-icon.svg';

const Lista = ({ className, repositorios }) => {

    return (
      <>
        {repositorios.map((item, index) => (
          <a
            className={className}
            style={{ textDecoration: "none" }}
            href={`${item.html_url}`}
            target="_blank"
            style={{ animationDelay: `${0.1 * index}s` }}
            key={index}
          >
            <section>
              <div>
                <h1>{item.name}</h1>
                <p className="descricao">
                  {item.description || "Não possui descrição."}
                </p>
              </div>

              <div className="info-projeto">
                <p className="info-projeto__fork">
                  Fork: {item.fork ? "sim" : "não"}
                </p>
                <p className="info-projeto__forks">
                  <Forks /> {item.forks}
                </p>
                <p className="info-projeto__language">
                  <Code /> {item.language}
                </p>
                <p className="info-projeto__stars">
                  <Star /> {item.stargazers_count}
                </p>
              </div>
            </section>
          </a>
        ))}
      </>
    );
}

const ListaRepositorios = styled(Lista)`
  animation: showAnimation 1.5s linear forwards;
  text-decoration: none;
  visibility: hidden;

  @keyframes showAnimation {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      visibility: visible;
      opacity: 1;
      transform: translateY(0px);
    }
  }

  section {
    width: 100%;
    height: 150px;
    padding: 15px;

    background-color: ${({ theme }) => theme.colors.quarta};
    color: ${({ theme }) => theme.colors.terceiro};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: 0.3s ease-out;

    @media (max-width: 400px) {
      height: 100%;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 15px -2px ${({ theme }) => theme.colors.quarta};
    }
  }

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