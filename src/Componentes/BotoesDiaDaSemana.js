import { useState } from "react";
import styled from "styled-components";

export default function BotoesDiaDaSemana({ dia, i, days, setDays }) {
  const [buttonState, setButtonState] = useState(false);

  function adicionaArrayDays(i){
    if (days.includes(i)) {
        const indiceElemento = days.indexOf(i);
        if (indiceElemento > -1) {
          days.splice(indiceElemento, 1);
        }
      } else {
        setDays([...days, i]);
      }
    }
  return (
    <Botaozinho>
      <button
      className={buttonState ? "escuro" : "claro"} 
      key={i} onClick={() => {setButtonState(!buttonState); adicionaArrayDays(i)}}>
        {dia}
      </button>
    </Botaozinho>
  );
}

const Botaozinho = styled.div`
    .claro{
        background-color: white;
    }
    .escuro{
        background-color: #CFCFCF;;
    }
`