import styled from "styled-components";

export default function BotoesDiaSemanaCadastrados({ dia, i, days }) {
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
  return (
    <Botaozinho>
      <div className="dias-da-semana">
        {diasDaSemana.map((dia,i) => (
          <button className={days.includes(i) ? "escuro" : "claro"}>{dia}</button>
        ))}
      </div>
    </Botaozinho>
  );
}

const Botaozinho = styled.div`
  .dias-da-semana {
    display: flex;
    justify-content: flex-start;
    width: 303px;
    margin-left: 30px;
    button {
      height: 30px;
      width: 30px;
      left: 36px;
      top: 218px;
      border-radius: 5px;

      border: 1px solid #d4d4d4;
      margin-right: 4px;
      margin-bottom: 20px;
    }
  }
  .claro {
    background-color: white;
  }
  .escuro {
    background-color: #cfcfcf;
  }
`;
