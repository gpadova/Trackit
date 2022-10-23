import LogoImg from "../imagens/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setToken, setImage}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  function entrarAplicacao(e){
    e.preventDefault();

    const body = { email, password };
    URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    axios.post(URL, body)
    .then((res) => {navigate("/habitos");
                    console.log(res);
                    setToken(res.data.token);
                    setImage(res.data.image)})
    .catch((res) => alert(res.response.data.message))
  }


  return (
    <TelaInicial>
      <FotoLogo>
        <img src={LogoImg} alt="" />
      </FotoLogo>
      <form >
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
        <BotaoConfirmar onClick={entrarAplicacao}> 
          <button>Entrar</button>
        </BotaoConfirmar>
      </form>
      <BotaoCadastro>
        <Link to={"/cadastro"}>
          <p>Não tem uma conta? Cadastre-se!</p>
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
