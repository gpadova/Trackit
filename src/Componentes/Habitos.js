import Cabecalho from "./Cabecalho";
import AvisoSemHabitos from "./AvisoSemHabitos";
import AdicionarHabito from "./AdicionarHabito";
import ListaDeHabitos from "./ListaDeHabitos";
import Rodape from "./Rodape";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Habitos({ token, image }) {
  const [addHabito, setAddHabito] = useState(false);
  const [habitos, setHabitos] = useState({ id: "", name: "", days: [] });
  const [verificaMudanca, setVerificaMudanca] = useState(false);

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(URL, config)
      .then((res) => {
        setHabitos(res.data);
      })
      .catch((res) => console.log("deu erro!"));
  }, []);

  useEffect(() => {
    axios
      .get(URL, config)
      .then((res) => {
        setHabitos(res.data);
      })
      .catch((res) => console.log("deu erro!"));
  }, [verificaMudanca]);

  return (
    <>
      <BigBox>
        <Cabecalho image={image} />
        <TopoPaginaHabitos>
          <h2>Meus Hábitos</h2>
          <div className="box" onClick={() => setAddHabito(!addHabito)}>
            +
          </div>
        </TopoPaginaHabitos>
        {addHabito && (
          <AdicionarHabito
            addHabito={addHabito}
            setAddHabito={setAddHabito}
            habitos={habitos}
            setHabitos={setHabitos}
            token={token}
            verificaMudanca={verificaMudanca}
            setVerificaMudanca={setVerificaMudanca}
          />
        )}
        {habitos.length ? (
          habitos.map((objeto) => (
            <ListaDeHabitos
              objeto={objeto}
              token={token}
              verificaMudanca={verificaMudanca}
              setVerificaMudanca={setVerificaMudanca}
            />
          ))
        ) : (
          <AvisoSemHabitos />
        )}
        <Rodape />
      </BigBox>
    </>
  );
}

const BigBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
  overflow: hidden;
  padding-top: 30px;
`;

const TopoPaginaHabitos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin-top: 70px;
  h2 {
    color: #126ba5;
    margin-left: 17px;
    font-size: 23px;
  }
  .box {
    margin-right: 17px;
    height: 35px;
    width: 40px;
    left: 317px;
    top: 92px;
    border-radius: 4.636363506317139px;
    background: #52b6ff;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
