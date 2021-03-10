import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import SearchInput from "../SearchInput";
import fetchData from "../../data/fetchData/fetchData";
import MensagemErro from "../Mensagem";

const Form = ({ className }) => {
  const [username, setUsername] = useState("");
  const [temErro, setTemErro] = useState(false);
  const disableButton = username.length <= 2;

  const fecharMensagemErro = () => {
    setTemErro(false);
  }

  const history = useHistory();

  useEffect(() => {
  }, [])

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const urlUser = `https://api.github.com/users/${username}`;

    fetchData(urlUser)
      .then((response) => {
        console.log(response);
        history.push(`perfil/${username}`);
      })
      .catch((erro) => {
        console.log(erro);
        setTemErro(true);
      })
  };

  return (
    <>
      {temErro && <MensagemErro fecharMensagemErro={fecharMensagemErro} />}
      <form className={className} onSubmit={handleSubmit}>
        <SearchInput name="username" setUsername={setUsername} />
        <Button disabled={disableButton}>Buscar user</Button>
      </form>
    </>
  );
};

const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export default Formulario;