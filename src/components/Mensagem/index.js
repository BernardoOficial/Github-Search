import styled from 'styled-components'
import close from '../../assets/images/close.svg'

const Mensagem = ({ className, fecharMensagemErro }) => {

    return (
      <span className={className}>
        <img
          src={close}
          alt=""
          onClick={fecharMensagemErro}
        />
        <h1>Aconteceu um problema</h1>
        <p>
          Usuário não encontrado no Github, por favor tente inserir um usuário
          válido.
        </p>
      </span>
    );
}

const MensagemErro = styled(Mensagem)`
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: ${({theme}) => theme.colors.secundo};

    width: 300px;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    color: ${({theme}) => theme.colors.tituloPreto };
    box-shadow: 0 0 60px rgba(255, 255, 255, 0.3);

    animation: showOpacity 0.5s ease-out forwards;

    @keyframes showOpacity {
        0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0;
            visibility: hidden;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            visibility: visible;
            opacity: 1;
        }
    }

    & > img {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    & > h1 {
        font-size: 1.6rem;
        line-height: 2rem;
        margin-bottom: 1rem;
    }
    
    & > p {
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
`

export default MensagemErro;