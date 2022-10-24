import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HabitoDia from "./HabitoDia";

export default function Historico({ image, token  }) {
  
    const [hist, setHist] = useState()
    
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    useEffect(() => {
        axios.get(URL, config)
        .then(res => setHist(res.data))
        .catch(res => console.log("Deu erro!"))
  }, []);

  console.log(hist)

  return (
    <>
      <GlobalWrapper>
        <Cabecalho image={image} />
        <Conteudo>
          <h2>Histórico</h2>
        </Conteudo>
        <HabitosHist>
            {hist !==undefined && hist.map((dia, i) => <HabitoDia dia={dia} key={i}/>)}
        </HabitosHist>
        <Rodape />
      </GlobalWrapper>
    </>
  );
}

const GlobalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
`;

const Conteudo = styled.div`
  margin-top: 70px;
  padding-top: 20px;
  h2 {
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126ba5;
    margin-left: 17px;
  }
`;

const HabitosHist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`