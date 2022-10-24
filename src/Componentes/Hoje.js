import Cabecalho from "./Cabecalho";
import ListaHabitosHoje from "./ListaHabitosHoje";
import Rodape from "./Rodape";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

export default function Hoje({ image, token }) {
  const [habitosHoje, setHabitosHoje] = useState({});
  const [renderVar, setRenderVar] = useState(false);
  const { progress, setProgress } = useContext(UserContext);

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(URL, config)
      .then((res) => {
        setHabitosHoje(res.data);
      })
      .catch((res) => console.log(res.message));
  }, []);

  useEffect(() => {
    axios
      .get(URL, config)
      .then((res) => {
        setHabitosHoje(res.data);
      })
      .catch((res) => console.log(res.message));
  }, [renderVar]);

  const today = new Date();
  const mes = today.getMonth();
  const dia = String(today.getDate());
  let diaSemana = today.getDay();


  function verificaDiaSemana() {
    switch (diaSemana) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda-feira";
      case 2:
        return "Terça-feira";
      case 3:
        return "Quarta-feira";
      case 4:
        return "Quinta-feira";
      case 5:
        return "Sexta-feira";
      default:
        return "Sábado";
    }
  }

  return (
    <>
      <Tudo>
        <Cabecalho image={image} />
        <Topo>
          <h2>
            {() => verificaDiaSemana()}  {dia}/{mes + 1}
          </h2>
          <h3>Progresso 67%</h3>
        </Topo>
        <ContainerHabitos>
          {habitosHoje.length &&
            habitosHoje.map((habito, i) => (
              <ListaHabitosHoje
                hab={habito}
                i={i}
                config={config}
                renderVar={renderVar}
                setRenderVar={setRenderVar}
              />
            ))}
        </ContainerHabitos>
        <Rodape />
      </Tudo>
    </>
  );
}

const Tudo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
`;

const ContainerHabitos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Topo = styled.div`
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
  h3 {
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #bababa;
    margin-left: 17px;
  }
`;
