import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";

export default function ListaHabitosHoje({
  hab,
  i,
  config,
  setRenderVar,
  renderVar,
}) {
  const URL1 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${hab.id}/check`;
  const URL2 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${hab.id}/uncheck`;
  function marcaComoFeito(e) {
    axios
      .post(URL1, {}, config)
      .then(setRenderVar(!renderVar))
      .catch(() => console.log("Deu erro!"));
  }

  function marcaComoNaoFeito(e) {
    axios
      .post(URL2, {}, config)
      .then(setRenderVar(!renderVar))
      .catch(() => console.log("Deu erro!"));
  }
  
  return (
    <>
      <CaixaComHabito>
        <div className="esquerda">
          <div className="titulo">{hab.name}</div>
          <div className="atual-e-recorde">
            <p>Sequência Atual:{hab.currentSequence}</p>
            <p>Seu recorde: {hab.highestSequence}</p>
          </div>
        </div>
        {hab.done ? (
          <div className="check-verde">
            <BsCheckLg onClick={() => marcaComoNaoFeito()} />
          </div>
        ) : (
          <div className="check">
            <BsCheckLg onClick={() => marcaComoFeito()} />
          </div>
        )}
      </CaixaComHabito>
    </>
  );
}

const CaixaComHabito = styled.div`
  height: 94px;
  width: 340px;
  left: 18px;
  top: 177px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  .titulo {
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    color: #666666;
  }
  .atual-e-recorde {
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    color: #666666;
  }
  .esquerda {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .check {
    height: 69px;
    width: 69px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
    font-size: 30px;
    color: white;
  }
  .check-verde {
    height: 69px;
    width: 69px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8fc549;
    font-size: 30px;
    color: white;
  }
`;
