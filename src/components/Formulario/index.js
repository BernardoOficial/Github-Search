import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import SearchInput from "../SearchInput";

const Form = ({ className }) => {
  const [username, setUsername] = useState("");
  const disableButton = username.length <= 2;

  const history = useHistory();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("Enviou");

    history.push(`perfil/${username}`);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <SearchInput setUsername={setUsername} />
      <Button disabled={disableButton}>
        Buscar user
      </Button>
    </form>
  );
};

const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Formulario;