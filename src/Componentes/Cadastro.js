import LogoImg from "../imagens/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  function enviarCadastro(e) {
    e.preventDefault();
    const body = {
      email,
      name,
      image,
      password,
    };

    axios
      .post(URL, body)
      .then((res) => {
        navigate("/");
      })
      .catch((res) => alert(res.response.data.message));
  }

  return (
    <TelaInicial>
      <FotoLogo>
        <img src={LogoImg} alt="" />
      </FotoLogo>
      <form onSubmit={enviarCadastro}>
        <Formulario>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Formulario>
        <Formulario>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Formulario>
        <Formulario>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Formulario>
        <Formulario>
          <input
            type="url"
            placeholder="Foto"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Formulario>
        <BotaoConfirmar>
          <button>Cadastrar</button>
        </BotaoConfirmar>
      </form>

      <BotaoCadastro>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </BotaoCadastro>
    </TelaInicial>
  );
}

const TelaInicial = styled.div`
  width: 100%;
  img {
    margin-top: 68px;
  }
`;

const Formulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  margin: 0 auto;
  color: #d5d5d5;

  input {
    margin-bottom: 10px;
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
  }
`;

const FotoLogo = styled.div`
  display: flex;
  justify-content: center;
`;

const BotaoConfirmar = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid white;
  button {
    height: 45px;
    width: 303px;
    left: 36px;
    top: 381px;
    border-radius: 4.636363506317139px;
    background-color: #52b6ff;
    color: white;
  }
`;

const BotaoCadastro = styled.div`
  display: flex;
  justify-content: center;
  color: #52b6ff;
  text-decoration: underline;
`;
