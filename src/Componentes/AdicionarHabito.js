import styled from "styled-components";
import BotoesDiaDaSemana from "./BotoesDiaDaSemana";
import { useState } from "react";
import axios from "axios";

export default function AdicionarHabito({
  addHabito,
  setAddHabito,
  token,
  refreshNaPagina,
}) {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  const body = { name, days };
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function mandarHabitoAPI(e) {
    e.preventDefault();
    axios
      .post(URL, body, config)
      .then((res) => {
        setAddHabito(!addHabito);
      })
      .catch((res) => console.log(res));
  }

  return (
    <>
      <AddHabito>
        <div className="nome-do-habito">
          <input
            type="text"
            placeholder="Nome do hábito"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="dias-da-semana">
          {diasDaSemana.map((dia, i) => (
            <BotoesDiaDaSemana dia={dia} i={i} days={days} setDays={setDays} />
          ))}
        </div>
        <div className="botoes-acoes">
          <p className="cancelar" onClick={() => setAddHabito(!addHabito)}>
            cancelar
          </p>
          <p className="salvar" onClick={(e) =>{mandarHabitoAPI(e);refreshNaPagina()}}>
            salvar
          </p>
        </div>
      </AddHabito>
    </>
  );
}

const AddHabito = styled.div`
  background-color: white;
  height: 180px;
  width: 340px;
  left: 17px;
  top: 147px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .nome-do-habito {
    input {
      height: 45px;
      width: 303px;
      left: 36px;
      top: 165px;
      border-radius: 5px;
    }
  }
  .dias-da-semana {
    display: flex;
    justify-content: flex-start;
    width: 303px;

    button {
      height: 30px;
      width: 30px;
      left: 36px;
      top: 218px;
      border-radius: 5px;

      border: 1px solid #d4d4d4;
      margin-right: 4px;
    }
  }
  .botoes-acoes {
    width: 340px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .cancelar {
      color: #52b6ff;
      height: 35px;
      width: 84px;
      left: 257px;
      top: 277px;
      border-radius: 4.636363506317139px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 23px;
    }
    .salvar {
      height: 35px;
      width: 84px;
      left: 257px;
      top: 277px;
      border-radius: 4.636363506317139px;
      background: #52b6ff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin-right: 16px;
    }
  }
`;
